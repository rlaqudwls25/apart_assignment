export interface UserInfo {
  id: number
  login: string
  avatar_url: string
  type: string
  repos_url: string
  html_url: string
}

export interface UserData {
  total_count: number
  incomplete_results: boolean
  items: UserInfo[]
}
