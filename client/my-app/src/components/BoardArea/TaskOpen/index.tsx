import { ITask } from "../../../interface";
import { Description, TaskOpenContainer, Title } from "./style";
import iconMenu from "../../../img/icon-vertical-ellipsis.svg";
import React from "react";
import Checkbox from "../../UI/Checkbox";
import { useContext } from 'react';
import { TaskCardContext } from "../../../Context/Context";
import SubtasksList from "../SubtasksList";
import SelectStatus from "../../UI/SelectStatus";

export const TaskOpen: React.FC = () => {

  const {dataTask} = useContext(TaskCardContext);

  return (
    <>
      <TaskOpenContainer>
        <Title>
          <h3>{dataTask.title}</h3>
          <img src={iconMenu} alt="картинка" />
        </Title>
        <Description>
          {dataTask.description}
        </Description>
        <SubtasksList />
        <SelectStatus />
      </TaskOpenContainer>
    </>
  )
}
