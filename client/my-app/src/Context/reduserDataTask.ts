import { IData, ITask } from "../interface";
import { SelectBoardContext } from "./Context";

export enum reduserDataTask_actionType {
  setChecked = 'setChecked',
  disableChecked = 'disableChecked',
  changeStatus = 'changeStatus',
}

export interface Iaction {
  type: reduserDataTask_actionType;
  payload: number | string;
}

export const reduserDataTask = (state: ITask, action: Iaction) => {
  switch (action.type) {
    case reduserDataTask_actionType.setChecked:

      state.subtasks && typeof (action.payload) === "number" && (state.subtasks[action.payload].isCompleted = true);

      return { ...state };

    case reduserDataTask_actionType.disableChecked:
      state.subtasks && typeof (action.payload) === "number" && (state.subtasks[action.payload].isCompleted = false);
      return { ...state };

    case reduserDataTask_actionType.changeStatus:
      const tempState = { ...state };
      typeof (action.payload) === "string" && (tempState.status = action.payload);

      // let data: IData | undefined;
      // const dataBoardsString: string | null = localStorage.getItem('dataBoards');
      // if (dataBoardsString) {
      //   data = JSON.parse(dataBoardsString);
      //   if (data?.boards) {
      //     console.log(data.boards);
      //     console.log(state);
      //     console.log(tempState);
      //   }
      // }

      return { ...tempState };

    default:
      return state
  }
}