import { IBoard, IColumn, IData, ITask } from "../interface";

export enum reduserData_actionType {
  getData = 'getData',
  taskChangeStatus = 'taskChangeStatus',
  addColumn = 'addColumn',
  addBoard = 'addBoard',
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

    case reduserData_actionType.addColumn:
      const newColumn: IColumn = { name: "newColumn", tasks: [] };
      if (state.boards && action.indexActiveBoard !== undefined)
        state.boards[action.indexActiveBoard].columns.push(newColumn);

      return { ...state };

    case reduserData_actionType.addBoard:
      const newBoard: IBoard = { name: "new Board", columns: [] };
      if (state.boards)
        state.boards.push(newBoard);

      return { ...state };

    case reduserData_actionType.taskChangeStatus:
      const columnNewName = (action.task as ITask).status;
      const taskTitle = (action.task as ITask).title;
      const newData = { ...state };

      if (newData.boards && state.boards && action.indexActiveBoard !== undefined && action.task) {

        const columnNewId = state.boards[action.indexActiveBoard].columns.findIndex((element) => element.name === columnNewName);

        let taskId = -1;
        const columnPrevId = state.boards[action.indexActiveBoard].columns.findIndex(
          (column) => {
            taskId = column.tasks.findIndex((task) => {
              if (task)
                return (task.title !== undefined && task.title === taskTitle)
              else
                return 0;
            });
            if (taskId !== -1)
              return true;
            else
              return false;
          }
        );

        console.log(action.task);

        if (taskId !== -1 && columnNewId !== columnPrevId) {
          console.log("deleted task");

          newData.boards[action.indexActiveBoard].columns[columnNewId].tasks.push(action.task);
          newData.boards[action.indexActiveBoard].columns[columnPrevId].tasks.splice(taskId, 1);

          return { ...newData };
        }
      }

      return { ...state };

    default:
      return state
  }
}