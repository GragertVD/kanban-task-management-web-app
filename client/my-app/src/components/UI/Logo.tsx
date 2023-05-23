import React from 'react';
import {ReactComponent as LogoKanban} from "../../img/logo-dark.svg";
import styled from 'styled-components';

const LogoContainer = styled.div`
  padding-right: 32px;
  border-right: 1px solid ${props => props.theme.theme === "light" ? props.theme.colors.linesLight : props.theme.colors.linesDark};

  svg{
    margin-right: 90px;
    g path{
      fill: ${props => props.theme.theme === "light" ? props.theme.colors.black : props.theme.colors.white};
    }
  }
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoKanban />
      {/* <img src={logoDark} alt="logo" /> */}
    </LogoContainer>
  )
}

export default Logo;