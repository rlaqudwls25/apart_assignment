import { getUser } from '@/apis/getUser'
import SearchBar from '@/components/search/SearchBar'
import UserList from '@/components/user/List'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'

const UserPage = () => {
  const [userName, setUserName] = useState<string>('')

  const { data } = useInfiniteQuery({
    queryKey: ['users', userName],
    queryFn: ({ pageParam = 1 }) => getUser({ userName, pageParam }),
    initialPageParam: 1,
    enabled: !!userName,
    getNextPageParam: (snapshot: any) => {
      console.log('snapshot', snapshot)
      return snapshot.total_count
    },
  })

  console.log('data', data)

  const onSearch = (keyword: string) => {
    setUserName(keyword)
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <UserList />
    </>
  )
}

export default UserPage
