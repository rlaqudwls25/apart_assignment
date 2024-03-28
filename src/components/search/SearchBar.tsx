import TextField from '@components/shared/TextField'
import styled from '@emotion/styled'
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
      onSearch(searchKeyword.toLocaleLowerCase())
    }
  }

  return (
    <SearchBarContainer>
      <TextField
        placeholder="유저를 검색해주세요."
        value={searchKeyword}
        onChange={handleSearch}
        onKeyDown={handleKeyPress}
      />
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 70px;
`

export default SearchBar
