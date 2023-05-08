import React from 'react'
import { ReactComponent as IconBoard } from "../../../img/icon-board.svg";
import { Item } from './style';



function CreateItemBoard() {
  return (
    <Item><IconBoard />+ Create New Board</Item>
  )
}

export default CreateItemBoard