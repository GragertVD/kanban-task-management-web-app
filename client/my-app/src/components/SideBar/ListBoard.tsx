import React, { useContext } from 'react'
import ItemBoard from './ItemBoard'
import CreateItemBoard from './CreateItemBoard';
import { IData } from '../../interface';
import { SelectBoardContext } from '../../Context/Context';


function ListBoard() {
  // const data:IData = useContext(dataContext);

  // let data: IData | undefined;
  // const dataBoardsString: string | null = localStorage.getItem('dataBoards');
  // if (dataBoardsString) {
  //   data = JSON.parse(dataBoardsString);
  // }

  // let indexActiveBoard: string | null = localStorage.getItem('indexActiveBoard');
  const {data, indexActiveBoard } = useContext(SelectBoardContext);

  if (data && data.boards)
    return (
      <div
      // style={{ overflowY: 'auto' }}
      >
        {/* <h3>ALL BOARD ({props.data.board.length})</h3> */}
        {data.boards
          ? data.boards.map((data, index) => <ItemBoard key={index} index={index} active={index === Number(indexActiveBoard) ? true : false} nameBoard={data.name} />)
          : <div>Пусто</div>
        }
        <CreateItemBoard />
      </div>
    )
  else
    return (<div>load</div>)
}

export default ListBoard