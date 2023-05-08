import React, { useContext } from 'react'
import ItemBoard from './ItemBoard'
import CreateItemBoard from './CreateItemBoard';
import dataContext from '../Context';
import { IData } from '../../interface';


function ListBoard() {
  const data:IData = useContext(dataContext);
  
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
  else
    return(<div>load</div>) 
}

export default ListBoard