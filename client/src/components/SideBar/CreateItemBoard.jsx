import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconBoard } from "../../img/icon-board.svg";


const Item = styled.div`
  color: ${props => props.theme.colors.mainPurple};
  background: transperty;
  transition: all 0.15s;

  @media (any-hover: hover) {
    &:hover{
      background-color: rgba(99, 95, 199 , 0.1);
    }
  }

  width: 100%;
  height: 48px;
  margin-left: -32px;
  padding-left: 32px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  cursor: pointer;

  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  svg{
    margin-right: 16px;
    path{
      fill: ${props => props.theme.colors.mainPurple};
    }
  }
  `;

function CreateItemBoard(props) {
  return (
    <Item><IconBoard />+ Create New Board</Item>
  )
}

export default CreateItemBoard