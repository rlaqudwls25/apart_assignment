import { UserData } from '@/types/user'
import UserListItem from './Item'

const UserList = ({ list }: { list: UserData[] }) => {
  return (
    <>
      {list.map((user) =>
        user.items.map((item) => {
          return (
            <>
              <UserListItem key={item.id} {...item} />
            </>
          )
        }),
      )}
    </>
  )
}

export default UserList
