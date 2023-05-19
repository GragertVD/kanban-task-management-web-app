import { Background, Description, TaskOpenContainer, Title } from "./style";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useContext, useEffect } from 'react';
import { BoardsContext, TaskCardContext } from "../../Context/Context";
import SelectStatus from "../UI/SelectStatus";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import SubtasksList from "../BoardArea/SubtasksList";

interface ITaskOpen {
  close: Dispatch<SetStateAction<boolean>>;
}

export const AddNewtask: React.FC<ITaskOpen> = ({ close }) => {

  // const { dataTask } = useContext(TaskCardContext);
  const { dispatchData, indexActiveBoard } = useContext(BoardsContext);

  useEffect(() => {
    return () => {
    }
  }, []);

    
    const refTaskContainer = useRef(null);
    useOutsideClick({ element: refTaskContainer, setStateOutsideClick: close })
    
  return (
    <>
      <Background >
        <TaskOpenContainer ref={refTaskContainer}>
          <Title>
            <h3>Add New Task</h3>
          </Title>
          <Description>
            Input
          </Description>
          <SubtasksList />
          <SelectStatus />
        </TaskOpenContainer>
      </Background >
    </>
  )
}
