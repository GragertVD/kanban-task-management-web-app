import React from 'react'
import { ReactComponent as IconBoard } from "../../../img/icon-board.svg";
import { Item } from './style';
import { reduserData_actionType } from '../../../Context/reduserData';
import { SelectBoardContext } from '../../../Context/Context';
import { useContext } from 'react';


function CreateItemBoard() {
  const { dispatchData } = useContext(SelectBoardContext);

  const addBoard = () => {
    dispatchData({ type: reduserData_actionType.addBoard });
  }

  return (
    <Item onClick={addBoard}><IconBoard />+ Create New Board</Item>
  )
}

export default CreateItemBoard