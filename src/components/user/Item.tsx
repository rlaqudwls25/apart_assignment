import { UserInfo } from '@/types/user'
import Flex from '@components/shared/Flex'
import Text from '@components/shared/Test'
import Image from 'next/image'
import { css } from '@emotion/react'
import { colors } from '@/styles/colors'

const UserListItem = ({ login, avatar_url }: UserInfo) => {
  return (
    <>
      <Flex align="center" css={ListItemContainerStyle}>
        <Image
          src={avatar_url}
          alt="유저 프로필"
          width={50}
          height={50}
          css={ImageStyle}
        />
        <Text>{login}</Text>
      </Flex>
    </>
  )
}

const ImageStyle = css`
  border-radius: 50%;
  border: 1px solid ${colors.grey};
  margin-right: 4px;
`

const ListItemContainerStyle = css`
  height: 80px;
  padding: 16px;
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  box-shadow: 0px 9px 15px -3px rgba(0, 0, 0, 0.1);
`

export default UserListItem
