import { getUser } from '@/apis/getUser'
import SearchBar from '@/components/search/SearchBar'
import Loader from '@/components/shared/Loader'
import UserList from '@/components/user/List'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'

const UserPage = () => {
  const [userName, setUserName] = useState<string>('')
  const ref = useRef<HTMLDivElement>(null)
  const isIntersect = useInfiniteScroll(ref)

  useEffect(() => {
    fetchMoreData()
  }, [isIntersect])

  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['users', userName],
    queryFn: ({ pageParam }) => getUser({ userName, pageParam }),
    initialPageParam: 1,
    enabled: !!userName,
    getNextPageParam: (lastPage, allPlages) => {
      return lastPage.items.length === 20 ? allPlages.length + 1 : null
    },
  })

  const fetchMoreData = () => {
    if (isIntersect && hasNextPage) {
      fetchNextPage()
    }
  }

  const onSearch = (keyword: string) => {
    setUserName(keyword)
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <UserList list={data?.pages || []} />
      {isLoading && <Loader />}
      <div ref={ref} />
    </>
  )
}

export default UserPage
