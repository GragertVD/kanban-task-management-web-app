import React from 'react'
import ChageTheme from './ChageTheme'
import { ToggleShowSideBar } from './ToggleShowSideBar'
import styled from 'styled-components'
import { IPropsToggleShowSideBar } from '../../interface';

const BottomSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

interface IPropsBottomSideBar extends IPropsToggleShowSideBar {

}

const BottomSideBar: React.FC<IPropsBottomSideBar> = (props) => {
  return (
    <BottomSideBarContainer>
      <ChageTheme />
      <ToggleShowSideBar StateShowSideBar={props.StateShowSideBar} />
    </BottomSideBarContainer>
  )
}

export default BottomSideBar