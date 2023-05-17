import { usePopup } from "../../../hooks/usePopup";
import { TaskCardContainer } from "./style";
import React, { useReducer } from "react";
import { TaskOpen } from '../TaskOpen/index';
import { useContext } from 'react';
import { SelectBoardContext } from "../../../Context/Context";
import { IData, ITask } from "../../../interface";
import { reduserData_actionType } from "../../../Context/reduserData";
import { useEffect } from 'react';
import { Iaction, reduserDataTask } from "../../../Context/reduserDataTask";



interface ITaskCardContext {
  dataTask: ITask;
  dispatchDataTask: React.Dispatch<Iaction>;
}


export const TaskCardContext = React.createContext<ITaskCardContext>({ dataTask: { title: "", status: "" }, dispatchDataTask: () => { } });

const TaskCard: React.FC<ITask> = (props) => {
  // const { dataTask } = useContext(TaskCardContext);

  const dataTask = props;

  const { dispatchData, indexActiveBoard } = useContext(SelectBoardContext);

  const popupClose = () => {
    dispatchData({ type: reduserData_actionType.taskChangeStatus, indexActiveBoard, task: dataTask });
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

  console.log("TaskCard ", dataTask);

  const [dataTaskContext, dispatchDataTask] = useReducer(reduserDataTask, dataTask);
  // const TaskCardContext = React.createContext<ITaskCardContext>({ dataTask: dataTaskContext, dispatchDataTask: dispatchDataTask });
  console.log("dataTaskContext ", dataTaskContext);


  return (
    <TaskCardContext.Provider value={{ dataTask: dataTaskContext, dispatchDataTask: dispatchDataTask }}>
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
        <TaskOpen />
      </PopupWrapper>
    </TaskCardContext.Provider>

  )
}

export default TaskCard;