import React, { useState } from 'react'
import { BordArea } from './BordArea';
import SideBar from './SideBar';
import styled from 'styled-components';

const BoardContainer = styled.div(props => ({
  display: 'flex',
  height: '100%',

  position: 'relative',
  transition: 'all 0.3s',
  width: '100vw',

}));

export const Board = () => {

  const [StateShowSideBar, setStateShowSideBar] = useState<'show' | 'hiden'>('show');

  return (
    <BoardContainer>
      <SideBar StateShowSideBar={{ StateShowSideBar, setStateShowSideBar }} />
      <BordArea StateShowSideBar={{StateShowSideBar, setStateShowSideBar}} />
    </BoardContainer>
  )
}
