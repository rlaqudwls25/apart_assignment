import TextField from '@components/shared/TextField'
import { useState } from 'react'

const SearchBar = ({
  onSearch,
}: {
  onSearch: (searchKeyword: string) => void
}) => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setSearchKeyword(value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchKeyword)
    }
  }

  return (
    <>
      <TextField
        placeholder="유저를 검색해주세요."
        value={searchKeyword}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
    </>
  )
}

export default SearchBar
