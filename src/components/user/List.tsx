import Flex from '@components/shared/Flex'
import UserListItem from './Item'
import { UserData } from '@/types/user'
import { css } from '@emotion/react'

const UserList = ({ list }: { list: UserData[] }) => {
  return (
    <Flex direction="column" css={ListContainerStyle}>
      {list.map((user) =>
        user.items.map((item) => {
          return (
            <>
              <UserListItem key={item.id} {...item} />
            </>
          )
        }),
      )}
    </Flex>
  )
}

const ListContainerStyle = css`
  padding: 16px;
  gap: 10px;
`

export default UserList
