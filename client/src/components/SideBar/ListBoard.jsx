import React, { useContext } from 'react'
import ItemBoard from './ItemBoard'
import CreateItemBoard from './CreateItemBoard';
import dataContext from '../Context';


function ListBoard(props) {
  const data = useContext(dataContext);

  if (data.boards)
    return (
      <div>
        {/* <h3>ALL BOARD ({props.data.board.length})</h3> */}
        {data.boards
          ? data.boards.map((data, index) => <ItemBoard key = {index} nameBoard={data.name}/>)
          :  <div>Пусто</div>
        }
        <CreateItemBoard />
      </div>
    )
}

export default ListBoard