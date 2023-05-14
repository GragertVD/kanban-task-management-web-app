import React, { useContext } from 'react'
import { AddColumnContainer } from './style';
import { SelectBoardContext } from '../../../Context/Context';
import { reduserData_actionType } from '../../../Context/reduserData';



const AddColumn: React.FC = () => {

  const { dispatchData, indexActiveBoard } = useContext(SelectBoardContext);

  const addColumn = () => {
    dispatchData({ type: reduserData_actionType.addColumn, indexActiveBoard });
  }

  return (
    <AddColumnContainer>
      <p
        onClick={addColumn}
      >+ New Column</p>
    </AddColumnContainer>
  )
}

export default AddColumn;