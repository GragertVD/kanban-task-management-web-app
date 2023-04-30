import React from 'react'
import ItemBoard from './ItemBoard'
import CreateItemBoard from './CreateItemBoard';

function ListBoard(props) {
  if (props.data.boards)
  return (
    <div>
      {/* <h3>ALL BOARD ({props.data.board.length})</h3> */}
      {props.data.boards
        ? props.data.boards.map((data, index) => <ItemBoard key = {index} nameBoard={data.name}/>)
        :  <div>Пусто</div>
      }
      <CreateItemBoard />
    </div>
  )
}

export default ListBoard