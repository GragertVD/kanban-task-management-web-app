import React from 'react'
import styled from 'styled-components'
import ListBoard from './SideBar/ListBoard';
import BottomSideBar from './SideBar/BottomSideBar';
import { IPropsToggleShowSideBar } from '../interface';


const SideBarContainer = styled.div<{ stateShowSideBar: 'show' | 'hiden' }>`
  transition: all 0.3s;
  transition: background-color 1s, color 1s;
  left: ${props => props.stateShowSideBar === 'show' ? '0px' : '-300px'};

  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 14px 32px 30px;

  border-right: 1px solid ${props => props.theme.theme === "light" ? props.theme.colors.linesLight : props.theme.colors.linesDark};
  background-color: ${props => props.theme.theme === "light" ? props.theme.colors.white : props.theme.colors.darkGrey};

  position: fixed;
  top: 95px;
  bottom: 0;

`;

const SideBar: React.FC<IPropsToggleShowSideBar> = (props) => {

  return (
    <SideBarContainer stateShowSideBar={props.StateShowSideBar.StateShowSideBar}>
      <ListBoard />
      <BottomSideBar StateShowSideBar={props.StateShowSideBar} />
    </SideBarContainer>
  )
}

export default SideBar