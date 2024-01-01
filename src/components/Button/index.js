import React from 'react';
import {ButtonCustomizado} from "./styles"

const Button = ({ Text, onClick, Type = "button" }) => {
  return(
    <ButtonCustomizado
      type={Type} onClick={onClick}
    >
       {Text}
    </ButtonCustomizado>
  )
}

export default Button;