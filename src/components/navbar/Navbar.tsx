import { colors } from '@/styles/colors'
import styled from '@emotion/styled'
import Link from 'next/link'
import Flex from '@components/shared/Flex'
import { css } from '@emotion/react'
import HomeIcon from '../icons/home'
import BookmarkIcon from '../icons/Bookmark'

const Navbar = () => {
  return (
    <NavbarContainer>
      <Flex align="center" justify="space-between" css={NavbarItemStyle}>
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link href="/bookmark">
          <BookmarkIcon />
        </Link>
      </Flex>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  position: fixed;
  border-bottom: 1px solid ${colors.grey};
  background-color: ${colors.white};
  width: 100%;
  height: 60px;
`

const NavbarItemStyle = css`
  padding: 20px;
`

export default Navbar
