import React from 'react'
import styled from 'styled-components';


const BoardAreaContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;

  background-color: ${props => props.theme.colors.lightGrey}; 
`;

export default function BordArea() {
  return (
    <BoardAreaContainer>
      BordArea
    </BoardAreaContainer>
  )
}
