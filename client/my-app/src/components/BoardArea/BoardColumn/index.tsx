import { IColumn } from '../../../interface';
import TaskCard from '../TaskCard';
import { BoardColumnContainer, ColumnTasksContainer } from './style';
import { BoardsContext, TaskCardProvider } from "../../../Context/Context";
import { useContext } from 'react';
import TaskElContext from '../TaskElContext';


interface IBoardColumn extends IColumn {
  index?: number;
}

const BoardColumn: React.FC<IBoardColumn> = (props) => {

  const { data, indexActiveBoard } = useContext(BoardsContext);

  if (data && data.boards !== undefined && indexActiveBoard !== undefined && props.index !== undefined) {
    const column: IColumn = data.boards[indexActiveBoard].columns[props.index];
    return (
      <BoardColumnContainer>
        <h4>{column.name} ({column.tasks.length})</h4>
        <ColumnTasksContainer>
          {
            column.tasks.length
              ?
              column.tasks.map(
                (dataTask, index) =>
                  <TaskCardProvider key={dataTask.title} {...dataTask}>
                    <TaskCard />
                  </TaskCardProvider>
              )
              :
              <div></div>
          }
        </ColumnTasksContainer>
      </BoardColumnContainer>
    )
  } else {
    return (
      <div>Load</div>
    )
  }
}

export default BoardColumn;