import React from 'react'
import logo from "../../img/logo-dark.svg";
import styled from 'styled-components';

const LogoContainer = styled.div`
  padding-right: 32px;
  border-right: 1px solid ${props => props.theme.colors.linesLight};
`;

const Logo = ()=> {
  return (
      <LogoContainer>
        <img src={logo} alt="картинка" />
      </LogoContainer>
  )
}

export default Logo;