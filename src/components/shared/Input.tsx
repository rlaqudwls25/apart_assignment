import styled from '@emotion/styled'
import { colors } from '@styles/colors'

const Input = styled.input`
  padding: 0 16px;
  font-size: 15px;
  height: 48px;
  font-weight: 500;
  border: 2px solid ${colors.grey};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.black};
  }
`
export default Input
