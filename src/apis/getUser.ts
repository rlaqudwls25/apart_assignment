import customAxios, { Method } from '@/utils/axios'

export const getUser = async ({
  userName,
  pageParam,
}: {
  userName: string
  pageParam: number
}) => {
  const res = await customAxios(Method.GET, 'search/users', {
    params: {
      q: userName,
      per_page: 20,
      page: pageParam,
    },
  })

  return res
}
