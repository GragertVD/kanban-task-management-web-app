import { usePopup } from "../../../hooks/usePopup";
import { TaskCardContainer } from "./style";
import React from "react";
import { TaskOpen } from '../TaskOpen/index';
import { useContext } from 'react';
import { SelectBoardContext, TaskCardContext, TaskCardProvider } from "../../../Context/Context";
import { IData, ITask } from "../../../interface";
import { reduserData_actionType } from "../../../Context/reduserData";
import {useEffect} from 'react';


const TaskCard: React.FC<ITask> = (props) => {
  // const { dataTask } = useContext(TaskCardContext);
  
  const dataTask = props;

  const { data, dispatchData, indexActiveBoard } = useContext(SelectBoardContext);

  const popupClose = () => {
    // console.log(dataTask);
    
    // dispatchData({ type: reduserData_actionType.taskChangeStatus, indexActiveBoard, task: dataTask });
  };

  const popup = usePopup(popupClose);
  const PopupWrapper = popup.PopupWrapper;


  let quantitySubtasksAll: number = 0;
  let quantitySubtasksComlited: number = 0;

  if (dataTask.subtasks !== undefined) {
    quantitySubtasksAll = dataTask.subtasks.length;
    const subtasksComlited = dataTask.subtasks.filter(({ isCompleted }) => isCompleted);
    quantitySubtasksComlited = subtasksComlited.length;
  }

  return (
    // <TaskCardProvider {...dataTask}>
    <>
      <TaskCardContainer
        onClick={() => popup.popupOpen()}
      >
        <h5>{dataTask.title}</h5>

        {   //Строка с учетом выполненых подзадач
          quantitySubtasksAll === 0 ?
            <p>0 substasks</p>
            :
            <p>{quantitySubtasksComlited} of {quantitySubtasksAll} substasks</p>
        }

      </TaskCardContainer>
      <PopupWrapper>
        <TaskOpen {...dataTask}/>
      </PopupWrapper>
    </>
    // </TaskCardProvider>

  )
}

export default TaskCard;