import { InputHTMLAttributes } from 'react'
import Input from './Input'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const TextFiled = ({ label, ...props }: TextFieldProps) => {
  return (
    <>
      <Input {...props} />
    </>
  )
}

export default TextFiled
