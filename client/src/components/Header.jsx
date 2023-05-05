import React from 'react'
import styled from 'styled-components'
import Logo from './UI/Logo'
import Button from './UI/Button'
import iconMenu from "../img/icon-vertical-ellipsis.svg";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  padding: 20px 30px 28px 24px;
  border-bottom: 1px solid ${props => props.theme.colors.linesLight};


  & div{
    display: flex;
    align-items: center;
    gap: 25px;
    height: 100%;

    img{
      cursor: pointer;  
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Logo />
        <h1>Platform Launch</h1>
      </div>
      <div>
        <Button text="+ Add new task"/>
        <img src={iconMenu} alt="картинка" />
      </div>
    </StyledHeader>
  )
}

export default Header;
