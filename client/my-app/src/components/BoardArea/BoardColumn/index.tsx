import { IBoard, IColumn } from '../../../interface';
import TaskCard from '../TaskCard';
import { BoardColumnContainer, ColumnTasksContainer } from './style';


const BoardColumn: React.FC<IColumn> = (props) => {

  return (
    <BoardColumnContainer>
      <h4>{props.name} ({props.tasks.length})</h4>
      <ColumnTasksContainer>
        {
          props.tasks.length ?
            props.tasks.map((dataTask, index) => <TaskCard key={index} {...dataTask} />)
            :
            <div>What?</div>
        }
        {/* <TaskCard /> */}
      </ColumnTasksContainer>
    </BoardColumnContainer>
  )
}

export default BoardColumn;