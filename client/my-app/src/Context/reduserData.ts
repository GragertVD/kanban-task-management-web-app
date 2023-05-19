import { IBoard, IColumn, IData, ITask } from "../interface";

export enum reduserData_actionType {
  getData = 'getData',
  taskChangeStatus = 'taskChangeStatus',
  addColumn = 'addColumn',
  addBoard = 'addBoard',
  deleteTask = 'deleteTask',
  deleteBoard = 'deleteBoard',
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

    case reduserData_actionType.deleteTask:

      if (state.boards && action.indexActiveBoard !== undefined && action.task !== undefined) {
        let taskId = -1;
        const columnId = state.boards[action.indexActiveBoard].columns.findIndex(
          (column) => {
            taskId = column.tasks.findIndex((task) => {
              if (task)
                return (task.title === (action.task as ITask).title)
              else
                return 0;
            });
            if (taskId !== -1)
              return true;
            else
              return false;
          }
        )

        if (taskId !== -1) {

          state.boards[action.indexActiveBoard].columns[columnId].tasks.splice(taskId, 1);

          return { ...state };
        }
      }

      return state;

    case reduserData_actionType.taskChangeStatus:
      let columnNewName: string = "";
      let taskTitle: string = "";
      const newData: IData = { ...state };
      let columnPrevId: number = -1;
      let columnNewId: number = -1;
      let taskId: number = -1;

      if (newData.boards && state.boards && action.indexActiveBoard !== undefined && action.task) {
        taskTitle = action.task.title;
        columnNewName = action.task.status;

        columnNewId = state.boards[action.indexActiveBoard].columns.findIndex((element) => (element.name === columnNewName));

        columnPrevId = state.boards[action.indexActiveBoard].columns.findIndex(
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

        if (taskId !== -1 && columnNewId !== columnPrevId && columnNewId !== -1) {

          newData.boards[action.indexActiveBoard].columns[columnPrevId].tasks.splice(taskId, 1);
          newData.boards[action.indexActiveBoard].columns[columnNewId].tasks.push(action.task);

          return { ...newData };
        }
      }

      return { ...state };
   
    case reduserData_actionType.deleteBoard:
      // const newBoard: IBoard = { name: "new Board", columns: [] };
      if (state.boards && action.indexActiveBoard !== undefined) 
        state.boards.splice(action.indexActiveBoard, 1);

      return { ...state };
    
    default:
      return state
  }
}