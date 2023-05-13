import { isNumberObject, isStringObject } from "util/types";
import { IData, ITask } from "../interface";

export enum reduserData_actionType {
  getData = 'getData',
  taskChangeLoad = 'taskChangeLoad',
}

export interface IactionData {
  type: reduserData_actionType;
  payload?: number | string | IData;
  indexActiveBoard?: number;
  task?: ITask;
}

export const reduserData = (state: IData, action: IactionData) => {
  switch (action.type) {
    case reduserData_actionType.getData:
      let temp = action.payload as IData;
      return { ...temp };

    case reduserData_actionType.taskChangeLoad:
      const columnNewName = (action.task as ITask).status;
      const taskTitle = (action.task as ITask).title;
      const newData = {...state};
      
      if (newData.boards && state.boards && action.indexActiveBoard !== undefined && action.task) {
        
        const columnNewId = state.boards[action.indexActiveBoard].columns.findIndex((element) => element.name === columnNewName);
        
        // const columnPrevId = state.boards[action.indexActiveBoard].columns.findIndex((element) => element.tasks === taskTitle);

        newData.boards[action.indexActiveBoard].columns[columnNewId].tasks.push(action.task);
        console.log(columnNewId);
        
      }

      console.log(state);
      console.log(newData);
      

      return { ...state };

    default:
      return state
  }
}