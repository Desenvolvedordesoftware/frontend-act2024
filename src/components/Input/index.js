import React from 'react';
import { InputCustomizado } from "./styles"

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <InputCustomizado
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input;