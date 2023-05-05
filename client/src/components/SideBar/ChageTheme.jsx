import React, { useState } from 'react'
import { ReactComponent as IconDarkTheme } from "../../img/icon-dark-theme.svg";
import { ReactComponent as IconLightTheme } from "../../img/icon-light-theme.svg";
import styled from 'styled-components';
import Toggle from '../UI/Toggle';

const ChangeThemeContainer = styled.div`
  height: 48px;
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 23.5px;
  padding: 15px 10px 32px 30px;

  background-color: ${props => props.theme.colors.lightGrey};

  svg{
    cursor: pointer;
  }
`;


export default function ChageTheme() {
  const [theme, setTheme] = useState('light');

  return (
    <ChangeThemeContainer>
      <IconLightTheme onClick={() => { theme === 'dark' && setTheme('light') }} />
      <Toggle state={['light', 'dark']} currentState={theme} setState={setTheme} />
      <IconDarkTheme onClick={() => { theme === 'light' && setTheme('dark') }} />
    </ChangeThemeContainer>
  )


}
