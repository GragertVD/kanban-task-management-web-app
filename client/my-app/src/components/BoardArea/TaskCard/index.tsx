import { ITask } from "../../../interface";
import { usePopup } from "../../../hooks/usePopup";
import { TaskCardContainer } from "./style";
import React from "react";
import { TaskOpen } from '../TaskOpen/index';


const TaskCard: React.FC<ITask> = (props) => {

  const popup = usePopup();
  const PopupWrapper = popup.PopupWrapper;

  let quantitySubtasksAll: number = 0;
  let quantitySubtasksComlited: number = 0;

  if (props.subtasks !== undefined) {
    quantitySubtasksAll = props.subtasks.length;
    const subtasksComlited = props.subtasks.filter(({ isCompleted }) => isCompleted);
    quantitySubtasksComlited = subtasksComlited.length;
  }

  return (
    <>
      <TaskCardContainer 
        onClick={() => popup.popupOpen()}
      >
        <h5>{props.title}</h5>

        {   //Строка с учетом выполненых подзадач
          quantitySubtasksAll === 0 ?
            <p>0 substasks</p>
            :
            <p>{quantitySubtasksComlited} of {quantitySubtasksAll} substasks</p>
        }

      </TaskCardContainer>
      <PopupWrapper>
        <TaskOpen {...props}/>
      </PopupWrapper>
    </>
  )
}

export default TaskCard;