import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconHiden } from "../../img/icon-hide-sidebar.svg";
import { ReactComponent as IconShow } from "../../img/icon-show-sidebar.svg";


const Item = styled.div`
  color: ${props => props.theme.colors.mediumGrey};
  background: transperty;
  transition: all 0.15s;

  &:hover{
    background-color: rgba(99, 95, 199 , 0.1);
    color: ${props => props.theme.colors.mainPurple};
    path{
      fill: ${props => props.theme.colors.mainPurple};
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
      fill: ${props => props.theme.colors.mediumGrey};
    }
  }
`;

const ItemHiden = styled.div`
  background: ${props => props.theme.colors.mainPurple};
  transition: all 0.15s;
  
  &:hover{
    background-color: ${props => props.theme.colors.mainPurpleHover};
  }

  position: relative;
  left: 270px;

  width: 56px;
  height: 48px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  svg path{
    fill: ${props => props.theme.colors.white};
  }
`;

function ToggleShowSideBar(props) {

  const ToggleVisibleSideBar = () => {
    props.StateShowSideBar.setStateShowSideBar(props.StateShowSideBar.StateShowSideBar === 'show' ? props.StateShowSideBar.StateShowSideBar = 'hiden' : props.StateShowSideBar.StateShowSideBar = 'show');
  };
  
  if (props.StateShowSideBar.StateShowSideBar === 'show'){
    return (
      <Item 
        onClick={ToggleVisibleSideBar}>
        <IconHiden />Hide Sidebar</Item>
    )
  } else if (props.StateShowSideBar.StateShowSideBar === 'hiden'){
    return (
      <ItemHiden
        onClick={ToggleVisibleSideBar}>
        <IconShow /></ItemHiden>
    )
  }
}

export default ToggleShowSideBar;