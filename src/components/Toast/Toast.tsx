import { ToastContainer } from 'react-toastify'

const Toast = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
    />
  )
}

export default Toast
