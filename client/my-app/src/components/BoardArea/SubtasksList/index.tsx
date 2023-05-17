import { IColumn } from '../../../interface';
import Checkbox from '../../UI/Checkbox';
import { TaskCardContext } from '../TaskCard';
import { SubtasksContainer } from './style';
import { useContext } from 'react';


const SubtasksList: React.FC = () => {

  const { dataTask } = useContext(TaskCardContext);

  let quantitySubtasksAll: number = 0;
  let quantitySubtasksComlited: number = 0;

  if (dataTask.subtasks !== undefined) {
    quantitySubtasksAll = dataTask.subtasks.length;
    const subtasksComlited = dataTask.subtasks.filter(({ isCompleted }) => isCompleted);
    quantitySubtasksComlited = subtasksComlited.length;
  }

  return (
    <SubtasksContainer>
      {   //Строка с учетом выполненых подзадач
        quantitySubtasksAll === 0 ?
          <p>0 substasks</p>
          :
          <p>{quantitySubtasksComlited} of {quantitySubtasksAll} substasks</p>
      }
      {   //Строка с учетом выполненых подзадач
        dataTask.subtasks !== undefined
          ?
          dataTask.subtasks.map((subtask, index) =>
            <Checkbox
              key={index}
              subtaskId={index}
              labelText={subtask.title}
              state={subtask.isCompleted}
              id="ch1"
            />)
          :
          <div>subtask missing</div>
      }
    </SubtasksContainer>
  )
}

export default SubtasksList;