import { ITask } from "../../../interface";
import { Description, SubtasksContainer, TaskOpenContainer, Title } from "./style";
import iconMenu from "../../../img/icon-vertical-ellipsis.svg";
import React from "react";


export const TaskOpen: React.FC<ITask> = (props) => {

  let quantitySubtasksAll: number = 0;
  let quantitySubtasksComlited: number = 0;

  if (props.subtasks !== undefined) {
    quantitySubtasksAll = props.subtasks.length;
    const subtasksComlited = props.subtasks.filter(({ isCompleted }) => isCompleted);
    quantitySubtasksComlited = subtasksComlited.length;
  }

  return (
    <>
      <TaskOpenContainer>
        <Title>
          <h3>{props.title}</h3>
          <img src={iconMenu} alt="картинка" />
        </Title>
        <Description>
          {props.description}
        </Description>
        <SubtasksContainer>
          {   //Строка с учетом выполненых подзадач
            quantitySubtasksAll === 0 ?
              <p>0 substasks</p>
              :
              <p>{quantitySubtasksComlited} of {quantitySubtasksAll} substasks</p>
          }
        </SubtasksContainer>
      </TaskOpenContainer>
    </>
  )
}
