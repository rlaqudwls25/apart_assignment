import { bookmarkListState } from '@/recoil/user'
import dynamic from 'next/dynamic'
import { useRecoilValue } from 'recoil'

const BookmarkList = dynamic(() => import('@/components/bookmark/List'), {
  ssr: false,
})

const BookmarkPage = () => {
  const bookmarkUser = useRecoilValue(bookmarkListState)

  return (
    <>
      <BookmarkList bookmarkUserData={bookmarkUser} />
    </>
  )
}

export default BookmarkPage
