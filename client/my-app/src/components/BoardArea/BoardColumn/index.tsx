import { IColumn } from '../../../interface';
import TaskCard from '../TaskCard';
import { BoardColumnContainer, ColumnTasksContainer } from './style';
import { TaskCardProvider } from "../../../Context/Context";


const BoardColumn: React.FC<IColumn> = (props) => {

  return (
    <BoardColumnContainer>
      <h4>{props.name} ({props.tasks.length})</h4>
      <ColumnTasksContainer>
        {
          props.tasks.length ?
            props.tasks.map((dataTask, index) => <TaskCardProvider key={index} {...dataTask}><TaskCard key={index} /></TaskCardProvider>)
            :
            <div></div>
        }
      </ColumnTasksContainer>
    </BoardColumnContainer>
  )
}

export default BoardColumn;