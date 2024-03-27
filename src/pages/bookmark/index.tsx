import BookmarkList from '@/components/bookmark/List'
import { bookmarkListState } from '@/recoil/user'
import { useRecoilValue } from 'recoil'

const BookmarkPage = () => {
  const bookmarkUser = useRecoilValue(bookmarkListState)

  return (
    <>
      <BookmarkList bookmarkUserData={bookmarkUser} />
    </>
  )
}

export default BookmarkPage
