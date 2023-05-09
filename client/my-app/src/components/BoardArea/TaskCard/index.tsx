import { ITask } from "../../../interface";
import { TaskCardContainer } from "./style";


const TaskCard: React.FC<ITask> = (props) => {

  return (
    <TaskCardContainer>
      <p>{props.title}</p>
    </TaskCardContainer>
  )
}

export default TaskCard;