import React from 'react'
import { StyledButton } from './style';


interface IPropsButton {
  onClick?: () => void;
  colorBG?: string;
  text: string;
}

const Button: React.FC<IPropsButton> = ({ colorBG, text, onClick }) =>
  <StyledButton onClick={onClick} colorBG={colorBG}>{text}</StyledButton>

export default Button;