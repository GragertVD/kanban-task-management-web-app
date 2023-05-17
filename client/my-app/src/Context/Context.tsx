import React, { Dispatch, ReactNode, SetStateAction, useEffect, useReducer, useState } from "react";
import { IData, ITask } from '../interface';
import { Iaction, InitDataTask, reduserDataTask, reduserDataTask_actionType } from "./reduserDataTask";
import getData from "../utils/getDataJSON";
import { IactionData, reduserData } from "./reduserData";

type TypeSetState<T> = Dispatch<SetStateAction<T>>

interface IContext {
  data: IData;
  dispatchData: React.Dispatch<IactionData>;
  indexActiveBoard: number;
  setIndexActiveBoard: TypeSetState<number>;
}

interface IProps extends IData {
  children: ReactNode;
}

export const SelectBoardContext = React.createContext<IContext>({ data: {}, dispatchData: () => { }, indexActiveBoard: 0, setIndexActiveBoard: () => { } });

export const SelectBoardProvider: React.FC<IProps> = (value) => {

  const [indexActiveBoard, setIndexActiveBoard] = useState(0);

  const [data, dispatchData] = useReducer(reduserData, value);


  useEffect(() => {
    getData(dispatchData);
  }, []);

  return (
    <SelectBoardContext.Provider value={{ data, dispatchData, indexActiveBoard, setIndexActiveBoard }}>
      {value.children}
    </SelectBoardContext.Provider>
  )

}


interface ITaskCardProps extends ITask {
  children: ReactNode;
}
interface ITaskCardContext {
  dataTask: ITask;
  dispatchDataTask: React.Dispatch<Iaction>;   
}

// const dataTaskdefault: ITask = { title: "", status: "" };

// export const TaskCardContext = React.createContext<ITaskCardContext>({ dataTask: dataTaskdefault, dispatchDataTask: () => { } });

// export const TaskCardProvider: React.FC<ITaskCardProps> = (value) => {

//   // console.log("TaskCardProvider ", value);
//   const [dataTask, dispatchDataTask] = useReducer(reduserDataTask, value);
//   // dispatchDataTask({ type: reduserDataTask_actionType.load , newTask:value});
//   // console.log("TaskCardProvider 2", dataTask);

//   // console.log(`Значение при создании контекста`, value, dataTask);

//   return (
//     <TaskCardContext.Provider value={{ dataTask, dispatchDataTask }}>
//       {value.children}
//     </TaskCardContext.Provider>
//   )

// }
