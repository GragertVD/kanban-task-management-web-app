import React from 'react'
import { StyledButton } from './style';


interface IPropsButton {
  colorBG?: string;
  text: string;
}

const Button: React.FC<IPropsButton> = ({ colorBG, text }) =>
  <StyledButton colorBG={colorBG}>{text}</StyledButton>

export default Button;