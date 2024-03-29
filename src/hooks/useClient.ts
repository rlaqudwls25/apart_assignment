import { bookmarkListState } from '@/recoil/user'
import { UserInfo } from '@/types/user'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

const useClient = () => {
  const bookmarkUser = useRecoilValue(bookmarkListState)

  const [client, setClient] = useState<UserInfo[]>([])

  useEffect(() => {
    setClient(bookmarkUser)
  }, [bookmarkUser])

  return client
}

export default useClient
