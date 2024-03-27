import { UserInfo } from '@/types/user'
import Flex from '../shared/Flex'
import styled from '@emotion/styled'
import Image from 'next/image'
import { colors } from '@/styles/colors'
import { css } from '@emotion/react'

const BookmarkList = ({
  bookmarkUserData,
}: {
  bookmarkUserData: UserInfo[]
}) => {
  return (
    <BookmarkListContainer>
      {bookmarkUserData.map((user) => {
        return (
          <Flex align="center" key={user.id} css={ListItemStyles}>
            <Image
              src={user.avatar_url}
              alt="유저 프로필"
              width={50}
              height={50}
              css={ImageStyle}
            />
            {user.login}
          </Flex>
        )
      })}
    </BookmarkListContainer>
  )
}

const BookmarkListContainer = styled.div`
  padding: 100px 16px 16px 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`

const ImageStyle = css`
  border-radius: 50%;
  border: 1px solid ${colors.grey};
  margin-right: 4px;
`

const ListItemStyles = css`
  height: 80px;
  padding: 16px;
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  box-shadow: 0px 9px 15px -3px rgba(0, 0, 0, 0.1);
`

export default BookmarkList
