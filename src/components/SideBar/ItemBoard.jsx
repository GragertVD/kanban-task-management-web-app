import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconBoard } from "../../img/icon-board.svg";


const Item = styled.div`
  color: ${props => props.theme.colors.mediumGrey};
  background: transperty;

  transition: all 0.15s;

  &.active{
    background-color: ${props => props.theme.colors.mainPurple};
    color: ${props => props.theme.colors.white};
    path{
      fill: ${props => props.theme.colors.white};
    }
  }
  &:hover{
    background-color: rgba(99, 95, 199 , 0.1);
    color: ${props => props.theme.colors.mainPurple};
    path{
      fill: ${props => props.theme.colors.mainPurple};
    }
  }
  &.active:hover{
    background-color: ${props => props.theme.colors.mainPurpleHover};
    color: ${props => props.theme.colors.white};
    path{
      fill: ${props => props.theme.colors.white};
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
  }
  `;

function ItemBoard(props) {
  return (
    <Item onClick={e => e.target.classList.toggle('active')}><IconBoard />{props.nameBoard}</Item>
  )
}

export default ItemBoard