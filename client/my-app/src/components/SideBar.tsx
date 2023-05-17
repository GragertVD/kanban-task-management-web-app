import React from 'react'
import styled from 'styled-components'
import ListBoard from './SideBar/ListBoard';
import BottomSideBar from './SideBar/BottomSideBar';
import { IPropsToggleShowSideBar } from '../interface';


const SideBarContainer = styled.div<{ stateShowSideBar: 'show' | 'hiden' }>(props => ({
  transition: 'all 0.3s',
  left: props.stateShowSideBar === 'show' ? '0px' : '-300px',

  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '15px 14px 32px 30px',

  borderRight: `1px solid ${props.theme.colors.linesLight}`,
  backgroundColor: `${props.theme.colors.white}`,

  position: `fixed`,
  top: '96px',
  bottom: '0',
}));

const SideBar: React.FC<IPropsToggleShowSideBar> = (props) => {

  return (
    <SideBarContainer stateShowSideBar={props.StateShowSideBar.StateShowSideBar}>
      <ListBoard />
      <BottomSideBar StateShowSideBar={props.StateShowSideBar} />
    </SideBarContainer>
  )
}

export default SideBar