import { UserInfo } from '@/types/user'
import Flex from '@components/shared/Flex'
import Text from '@components/shared/Test'
import Image from 'next/image'
import { css } from '@emotion/react'
import { colors } from '@/styles/colors'
import BookmarkIcon from '../icons/Bookmark'
import { useRecoilState } from 'recoil'
import { bookmarkListState } from '@/recoil/user'
import React from 'react'

const UserListItem = ({ id, login, avatar_url }: UserInfo) => {
  const [bookmarks, setBookmarks] = useRecoilState(bookmarkListState)

  const addBookmark = (id: number) => {
    setBookmarks((prevBookmarks) => {
      const isBookmarked = prevBookmarks.some((item) => item.id === id)
      if (isBookmarked) {
        return prevBookmarks.filter((item) => item.id !== id)
      } else {
        return [...prevBookmarks, { id, login, avatar_url }]
      }
    })
  }

  return (
    <>
      <Flex css={ListItemContainerStyle}>
        <Flex align="center" css={ListItemContentsStyle}>
          <Image
            src={avatar_url}
            alt="유저 프로필"
            width={50}
            height={50}
            css={ImageStyle}
          />
          <Text>{login}</Text>
        </Flex>
        <Flex>
          <button
            onClick={() => {
              addBookmark(id)
            }}
          >
            <BookmarkIcon
              isBookmarked={bookmarks.some((item) => item.id === id)}
            />
          </button>
        </Flex>
      </Flex>
    </>
  )
}

const ImageStyle = css`
  border-radius: 50%;
  border: 1px solid ${colors.grey};
  margin-right: 4px;
`

const ListItemContentsStyle = css`
  flex: 1;
`

const ListItemContainerStyle = css`
  height: 80px;
  padding: 16px;
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  box-shadow: 0px 9px 15px -3px rgba(0, 0, 0, 0.1);
`

export default React.memo(UserListItem)
