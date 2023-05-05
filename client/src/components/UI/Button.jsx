import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  color: white;
  background: ${props => props.colorBG || props.theme.colors.mainPurple};
  padding: 15px 25px;
  height: 48px;
  border: none;
  border-radius: 24px;

  @media (any-hover: hover) {
    &:hover{
      background: ${props => props.colorBG || props.theme.colors.mainPurpleHover};
    }
  }
`


 const Button = (props) => {
  // console.log(props.color);
  return (
    <StyledButton colorBG = {props.colorBG}>{props.text}</StyledButton>
  )
}

export default Button;