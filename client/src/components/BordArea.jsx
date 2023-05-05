import React from 'react'
import styled from 'styled-components';


const BoardAreaContainer = styled.div(props => ({
  backgroundColor: `${props.theme.colors.lightGrey}`,
  height: `100%`,
  flexGrow: `1`,
  flexShrink: `1`,

  transition: 'all 0.3s',
  paddingLeft: props.StateShowSideBar === 'show' ? '300px' : '0px',

  // ${(props) => {

  //   if(props.countColumn === 0){
  //   }
  // }}
  

}));


export default function BordArea(props) {

  let countColumn = 0;

  return (
    <BoardAreaContainer StateShowSideBar={props.StateShowSideBar} countColumn={countColumn}>
      BordArea
    </BoardAreaContainer>
  )
}
