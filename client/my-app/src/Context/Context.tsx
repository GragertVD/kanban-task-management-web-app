import React, { Dispatch, ReactNode, SetStateAction, useEffect, useReducer, useState } from "react";
import { IData, ITask } from '../interface';
import { Iaction, reduserDataTask } from "./reduserDataTask";
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
  // value: IData;
  // dispatchDataTask: React.Dispatch<IData>
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
  dispatchDataTask: React.Dispatch<Iaction>;   //оно сделано не обязательным потому что я в душе не евдаю, как передать его как начальное начение при создании контекста. потому что typeSript не хочет понимать что функция это функция а не какая-то другая фигня
}

const dataTaskdefault: ITask = { title: "", status: "" };

export const TaskCardContext = React.createContext<ITaskCardContext>({ dataTask: dataTaskdefault, dispatchDataTask: () => { } });

export const TaskCardProvider: React.FC<ITaskCardProps> = (value) => {

  const [dataTask, dispatchDataTask] = useReducer(reduserDataTask, value);

  return (
    <TaskCardContext.Provider value={{ dataTask, dispatchDataTask }}>
      {value.children}
    </TaskCardContext.Provider>
  )

}
