import { UserInfo } from '@/types/user'
import Flex from '@components/shared/Flex'
import Text from '@components/shared/Test'
import Image from 'next/image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const UserListItem = ({ login, avatar_url }: UserInfo) => {
  return (
    <ListContainer>
      <Image
        src={avatar_url}
        alt="유저 프로필"
        width={50}
        height={50}
        css={ImageStyle}
      />
      <Text>{login}</Text>
    </ListContainer>
  )
}

const ImageStyle = css`
  border-radius: 50%;
`

const ListContainer = styled.div`
  height: 80px;
`

export default UserListItem
