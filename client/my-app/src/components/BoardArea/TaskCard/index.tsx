import { usePopup } from "../../UI/usePopup";
import { TaskCardContainer } from "./style";
import React from "react";
import { TaskOpen } from '../TaskOpen/index';
import { useContext, useState } from 'react';
import { BoardsContext, TaskCardContext, TaskCardProvider } from "../../../Context/Context";
import { reduserData_actionType } from "../../../Context/reduserData";


const TaskCard: React.FC = () => {
  const { dataTask } = useContext(TaskCardContext);
  const { dispatchData, indexActiveBoard } = useContext(BoardsContext);

  const popupClose = () => {
    dispatchData({ type: reduserData_actionType.taskChangeStatus, indexActiveBoard, task: dataTask });
  };

  const popup = usePopup(popupClose);
  const PopupWrapper = popup.PopupWrapper;

  const [openCard, setOpenCard] = useState(false);

  let quantitySubtasksAll: number = 0;
  let quantitySubtasksComlited: number = 0;

  if (dataTask.subtasks !== undefined) {
    quantitySubtasksAll = dataTask.subtasks.length;
    const subtasksComlited = dataTask.subtasks.filter(({ isCompleted }) => isCompleted);
    quantitySubtasksComlited = subtasksComlited.length;
  }


  return (
    <>
      <TaskCardContainer onClick={() => setOpenCard(true)}>
        <h5>{dataTask.title}</h5>
        {   //Строка с учетом выполненых подзадач
          quantitySubtasksAll === 0 ?
            <p>0 substasks</p>
            :
            <p>{quantitySubtasksComlited} of {quantitySubtasksAll} substasks</p>
        }
      </TaskCardContainer>
      {
        openCard
          ?
          <TaskOpen close={setOpenCard}/>
          :
          <></>
      }
      {/* <PopupWrapper>
        <TaskOpen />
      </PopupWrapper> */}
    </>
  )
}

export default TaskCard;