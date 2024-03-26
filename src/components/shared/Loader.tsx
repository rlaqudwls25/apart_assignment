import { colors } from '@/styles/colors'
import styled from '@emotion/styled'

const Loader = () => {
  return <Loading />
}

const Loading = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  border: 5px solid ${colors.black};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
  z-index: 100;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loader
