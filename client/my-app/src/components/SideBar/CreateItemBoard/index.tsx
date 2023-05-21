import React, { useState } from 'react'
import { ReactComponent as IconBoard } from "../../../img/icon-board.svg";
import { Item } from './style';
import { reduserData_actionType } from '../../../Context/reduserData';
import { CreateBoard } from '../CreateBoard';


function CreateItemBoard() {
  const [openCreateBoard, setOpenCreateBoard] = useState(false);

  const addBoard = () => setOpenCreateBoard(true);

  return (
    <>
      <Item onClick={addBoard}><IconBoard />+ Create New Board</Item>
      {
        openCreateBoard
          ?
          <CreateBoard closeSetState={setOpenCreateBoard} />
          :
          <></>
      }
    </>
  )
}

export default CreateItemBoard