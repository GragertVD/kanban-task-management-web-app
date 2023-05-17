import { ITask } from "../interface";

export enum reduserDataTask_actionType {
  load = 'load',
  setChecked = 'setChecked',
  disableChecked = 'disableChecked',
  changeStatus = 'changeStatus',
}

export interface Iaction {
  type: reduserDataTask_actionType;
  payload?: number | string;
  newTask?: ITask;
}

export const reduserDataTask = (state: ITask, action: Iaction) => {
  switch (action.type) {
    case reduserDataTask_actionType.load:
      if (action.newTask){
        let tempNewTask = action.newTask;
        return { ...tempNewTask };
      }
      return { ...state };

    case reduserDataTask_actionType.setChecked:

      state.subtasks && typeof (action.payload) === "number" && (state.subtasks[action.payload].isCompleted = true);

      return { ...state };

    case reduserDataTask_actionType.disableChecked:
      state.subtasks && typeof (action.payload) === "number" && (state.subtasks[action.payload].isCompleted = false);
      return { ...state };

    case reduserDataTask_actionType.changeStatus:
      const tempState = { ...state };
      typeof (action.payload) === "string" && (tempState.status = action.payload);

      return { ...tempState };

    default:
      return state
  }
};

export const InitDataTask = (state: ITask):ITask => {
  // console.log(`Значение в инит`, state);
  // console.log("in InitDataTask");

  return {...state};

};