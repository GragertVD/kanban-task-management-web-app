import { Background, Description, TaskOpenContainer, Title } from "./style";
import iconMenu from "../../../img/icon-vertical-ellipsis.svg";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useContext, useEffect } from 'react';
import { BoardsContext, TaskCardContext } from "../../../Context/Context";
import SubtasksList from "../SubtasksList";
import SelectStatus from "../../UI/SelectStatus";
import DropMenu, { IMenuItem } from "../../UI/DropMenu";
import { reduserData_actionType } from "../../../Context/reduserData";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface ITaskOpen {
  close: Dispatch<SetStateAction<boolean>>;
}

export const TaskOpen: React.FC<ITaskOpen> = ({ close }) => {

  const { dataTask } = useContext(TaskCardContext);
  const { dispatchData, indexActiveBoard } = useContext(BoardsContext);

  useEffect(() => {
    return () => {
      dispatchData({ type: reduserData_actionType.taskChangeStatus, indexActiveBoard, task: dataTask });
    }
  }, [dataTask]);
  

  //Создаем массив объектов для выпадающего списка.
  const listDropMenu: IMenuItem | IMenuItem[] =
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

    
    const refTaskContainer = useRef(null);
    useOutsideClick({ element: refTaskContainer, setStateOutsideClick: close })
    
    const [showDropMenu, setshowDropMenu] = useState(false);

  return (
    <>
      <Background >
        <TaskOpenContainer ref={refTaskContainer}>
          <Title>
            <h3>{dataTask.title}</h3>
            <div style={{ position: "relative" }}>    {/*блок для  того, чтобы выпадающее меню появлялось рядом с кнопкой */}
              <img
                onClick={() => setshowDropMenu(!showDropMenu)}
                src={iconMenu} alt="картинка" />
              {
                showDropMenu
                  ?
                  <DropMenu listItem={listDropMenu} close={setshowDropMenu} />
                  :
                  <></>
              }
            </div>
          </Title>
          <Description>
            {dataTask.description}
          </Description>
          <SubtasksList />
          <SelectStatus />
        </TaskOpenContainer>
      </Background >
    </>
  )
}
