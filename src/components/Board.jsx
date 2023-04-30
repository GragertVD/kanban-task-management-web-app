import React, { useState } from 'react'
import BordArea from './BordArea';
import SideBar from './SideBar';
import styled from 'styled-components';



const BoardContainer = styled.div( props =>({
  display: 'flex',
  height: '100%',
  
  position: 'relative',
  transition: 'all 0.3s',
  width: '100vw+300px',
  left: props.visibleSideBar === 'show'? '0px' : '-300px',

}));

const Board = () => {

  const [StateShowSideBar, setStateShowSideBar] = useState('show');
  console.log(StateShowSideBar);

  return (
    <BoardContainer visibleSideBar={StateShowSideBar} >
      <SideBar StateShowSideBar={{ StateShowSideBar, setStateShowSideBar }} />
      <BordArea />
    </BoardContainer>
  )
}

export default Board