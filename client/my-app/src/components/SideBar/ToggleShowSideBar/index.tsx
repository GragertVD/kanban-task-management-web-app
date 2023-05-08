import React from 'react'
import { ReactComponent as IconHiden } from "../../../img/icon-hide-sidebar.svg";
import { ReactComponent as IconShow } from "../../../img/icon-show-sidebar.svg";
import { IPropsToggleShowSideBar } from '../../../interface';
import { Item, ItemHiden } from './style';



export const ToggleShowSideBar: React.FC<IPropsToggleShowSideBar> = ({ StateShowSideBar }) => {

  const ToggleVisibleSideBar = () => {
    StateShowSideBar.StateShowSideBar === 'show'
      ? StateShowSideBar.setStateShowSideBar( 'hiden')
      : StateShowSideBar.setStateShowSideBar('show');

  };

  if (StateShowSideBar.StateShowSideBar === 'show') {
    return (
      <Item
        onClick={ToggleVisibleSideBar}>
        <IconHiden />Hide Sidebar</Item>
    )
  } else if (StateShowSideBar.StateShowSideBar === 'hiden') {
    return (
      <ItemHiden
        onClick={ToggleVisibleSideBar}>
        <IconShow /></ItemHiden>
    )
  }
  return (<div>load</div>)    //костыль, надо исправить
}

// export ToggleShowSideBar;