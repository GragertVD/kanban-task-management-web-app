import { ITask } from "../../../interface";
import { Description, TaskOpenContainer, Title } from "./style";
import iconMenu from "../../../img/icon-vertical-ellipsis.svg";
import React from "react";
import Checkbox from "../../UI/Checkbox";
import { useContext } from 'react';
import { SelectBoardContext, TaskCardContext } from "../../../Context/Context";
import SubtasksList from "../SubtasksList";
import SelectStatus from "../../UI/SelectStatus";
import useDropMenu, { IDropMenuItem } from "../../UI/DropMenu";
import { reduserData_actionType } from "../../../Context/reduserData";

export const TaskOpen: React.FC = () => {

  const { dataTask } = useContext(TaskCardContext);
  const { dispatchData, indexActiveBoard } = useContext(SelectBoardContext);


  const listDropMenu: IDropMenuItem | IDropMenuItem[] =
    [
      {
        text: "Edit Task",
        action: () => {
          console.log("Edit Task");
        }
      },
      {
        text: "Delete Task",
        action: () => {
          console.log("Delete Task");
          dispatchData({ type: reduserData_actionType.deleteTask, indexActiveBoard: indexActiveBoard, task: dataTask });
        }
      },
    ];

  const dropMenu = useDropMenu(listDropMenu);
  const DropMenuWrapper = dropMenu.DropMenuWrapper;

  return (
    <>
      <TaskOpenContainer>
        <Title>
          <h3>{dataTask.title}</h3>
          <img
            onClick={dropMenu.DropMenuOpen}
            src={iconMenu} alt="картинка" />
          <DropMenuWrapper />
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
