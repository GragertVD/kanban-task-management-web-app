import { ITask } from "../../../interface";
import TaskCardOpen from "../../TaskCardOpen";
import { TaskCardContainer } from "./style";
import React, { useState } from "react";


const TaskCard: React.FC<ITask> = (props) => {

  const [openCard, setOpenCard] = useState(false);

  let quantitySubtasksAll: number = 0;
  let quantitySubtasksComlited: number = 0;

  if (props.subtasks !== undefined){
    quantitySubtasksAll = props.subtasks.length;
    const subtasksComlited = props.subtasks.filter(({ isCompleted }) => isCompleted);
    quantitySubtasksComlited = subtasksComlited.length;
  }

  return (
    <>
      <TaskCardContainer onClick={() => setOpenCard(!openCard)}>
        <h5>{props.title}</h5>

        {   //Строка с учетом выполненых подзадач
          quantitySubtasksAll === 0?
            <p>0 substasks</p>
          :
            <p>{quantitySubtasksComlited} of {quantitySubtasksAll} substasks</p>
        }
        
      </TaskCardContainer>
      <TaskCardOpen openCard={openCard} setOpenCard={setOpenCard} {...props}>
        <h3>{props.title}</h3>
        <div>{props.description}</div>
        <div>{props.status}</div>
      </TaskCardOpen>
    </>
  )
}

export default TaskCard;