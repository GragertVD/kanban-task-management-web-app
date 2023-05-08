import React from 'react'
import styled from 'styled-components';
import { IPropsToggleShowSideBar } from '../interface';


const BoardAreaContainer = styled.div<{ StateShowSideBar: 'show' | 'hiden', countColumn:number }>((props) => ({
  backgroundColor: `${props.theme.colors.lightGrey}`,
  height: `100%`,
  flexGrow: `1`,
  flexShrink: `1`,

  transition: 'all 0.3s',
  paddingLeft: props.StateShowSideBar === 'show' ? '300px' : '0px',
}));


export const BordArea: React.FC<IPropsToggleShowSideBar> = (props) => {

  let countColumn:number = 0;

  return (
    <BoardAreaContainer StateShowSideBar={props.StateShowSideBar.StateShowSideBar} countColumn={countColumn}>
      BordArea
    </BoardAreaContainer>
  )
}
