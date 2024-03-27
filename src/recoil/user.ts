import { UserInfo } from '@/types/user'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const localStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined

const { persistAtom } = recoilPersist({
  key: 'bookmarkListState',
  storage: localStorage,
})

export const bookmarkListState = atom<UserInfo[]>({
  key: 'bookmarkListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
