import { UserInfo } from '@/types/user'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const bookmarkListState = atom<UserInfo[]>({
  key: 'bookmarkListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
