import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>

interface IContext {
  indexActiveBoard?: number;
  setIndexActiveBoard?: TypeSetState<number>;
}

type IProps = {
  children?: ReactNode;
}


export const SelectBoardContext = React.createContext<IContext>({});

export const SelectBoardProvider: React.FC<IProps> = ({ children }) => {

  const [indexActiveBoard, setIndexActiveBoard] = useState(0);

  return(
    <SelectBoardContext.Provider value={{ indexActiveBoard, setIndexActiveBoard }}>
      {children}
    </SelectBoardContext.Provider>
  )

}
