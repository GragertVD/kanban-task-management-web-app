import React from 'react';
import logoDark from "../../img/logo-dark.svg";
import styled from 'styled-components';

const LogoContainer = styled.div`
  padding-right: 32px;
  border-right: 1px solid ${props => props.theme.colors.linesLight};
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <img src={logoDark} alt="logo" />
    </LogoContainer>
  )
}

export default Logo;