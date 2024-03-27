import { UserInfo } from '@/types/user'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
})

export const bookmarkListState = atom<UserInfo[]>({
  key: 'bookmarkListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})