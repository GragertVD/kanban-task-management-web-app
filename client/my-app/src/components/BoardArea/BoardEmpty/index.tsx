import React, { useState } from 'react'
import { BoardEmptyContainer } from './style';
import Button from '../../UI/Button';



const BoardEmpty: React.FC = () => {

  return (
    <BoardEmptyContainer>
      <div>This board is empty. Create a new column to get started.</div>
      <Button text={'+ Add New Column'} />
    </BoardEmptyContainer>
  )
}

export default BoardEmpty;