import React from 'react'
import styled from 'styled-components';


const BoardAreaContainer = styled.div(props => ({
  height: `100%`,
  flexGrow: `1`,
  flexShrink: `1`,

  transition: 'all 0.3s',
  paddingLeft: props.StateShowSideBar === 'show' ? '300px' : '0px',

  
  backgroundColor: `${props.theme.colors.lightGrey}`,

}));


export default function BordArea(props) {
  return (
    <BoardAreaContainer StateShowSideBar={props.StateShowSideBar}>
      BordArea
    </BoardAreaContainer>
  )
}
