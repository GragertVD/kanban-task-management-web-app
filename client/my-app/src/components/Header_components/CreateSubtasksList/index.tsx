import { ChangeEvent } from 'react';
import { ISubtask } from '../../../interface';
import Button from '../../UI/Button';
import { CreateSubtaskItem } from '../CreateSubtaskItem';
import { SubtasksContainer } from './style';

interface ICreateSubtasksList {
  subtaskListTitle: string[];
  setSubtaskListTitle: React.Dispatch<React.SetStateAction<string[]>>;
}

const CreateSubtasksList: React.FC<ICreateSubtasksList> = ({ subtaskListTitle, setSubtaskListTitle }) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const idSubtask = e.target.getAttribute("data-index");  //На input висит data атрибут с индексом соответствующему полозжению в массиве
    const newSubtaskList = subtaskListTitle.concat();
    newSubtaskList[Number(idSubtask)] = e.target.value;

    setSubtaskListTitle(newSubtaskList);
  }

  const AddNewSubtask = () => {
    setSubtaskListTitle(subtaskListTitle.concat(""));
  }

  return (
    <SubtasksContainer>
      <p>substasks</p>
      {   //чеклист с подзадачами
        // dataTask.subtasks !== undefined
        //   ?
        subtaskListTitle.map((subtask, index) =>
          <CreateSubtaskItem
            key={index}
            index={index}
            value={subtask}
            onChange={onChange}
          />)
        //   :
        //   <div>subtask missing</div>
      }
      <Button
        onClick={AddNewSubtask}
        color='#635FC7'
        colorBG='#635FC71A'
        width="100%"
        height="40px"
        text="+ Add New Subtask"
      />
    </SubtasksContainer>
  )
}

export default CreateSubtasksList;