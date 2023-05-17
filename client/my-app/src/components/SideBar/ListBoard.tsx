import { useContext } from 'react'
import ItemBoard from './ItemBoard'
import CreateItemBoard from './CreateItemBoard';
import { BoardsContext } from '../../Context/Context';

function ListBoard() {

  const { data, indexActiveBoard } = useContext(BoardsContext);


  if (data && data.boards)
    return (
      <div>
        {data.boards
          ? data.boards.map(
            (data, index) =>
              <ItemBoard
                key={index}
                index={index}
                active={index === Number(indexActiveBoard) ? true : false}
                nameBoard={data.name}
              />
          )
          : <div>Пусто</div>
        }
        <CreateItemBoard />
      </div>
    )
  else
    return (<div>load</div>)
}

export default ListBoard