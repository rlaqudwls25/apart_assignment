import { UserInfo } from '@/types/user'
import { RecoilEnv, atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

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
