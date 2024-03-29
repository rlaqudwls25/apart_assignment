import BookmarkList from '@/components/bookmark/List'
import useClient from '@/hooks/useClient'

const BookmarkPage = () => {
  const clientBookmarksList = useClient()

  return (
    <>
      <BookmarkList bookmarkUserData={clientBookmarksList} />
    </>
  )
}

export default BookmarkPage
