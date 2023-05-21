import React, { useState } from 'react'
import Logo from '../UI/Logo'
import Button from '../UI/Button'
import iconMenu from "../../img/icon-vertical-ellipsis.svg";
import { useContext } from 'react';
import { BoardsContext } from '../../Context/Context';
import DropMenu, { IMenuItem } from '../UI/DropMenu';
import { reduserData_actionType } from '../../Context/reduserData';
import { AddNewtask } from '../Header_components/AddNewTask';
import { StyledHeader } from './style';


const Header = () => {

  const { dispatchData, data, indexActiveBoard, setIndexActiveBoard } = useContext(BoardsContext);
  // dispatchData({ type: reduserData_actionType.taskChangeStatus, indexActiveBoard, task: dataTask });

  const [showDropMenu, setshowDropMenu] = useState(false);
  //Создаем массив объектов для выпадающего списка.
  const listDropMenu: IMenuItem | IMenuItem[] =
    [
      {
        text: "Edit Board",
        action: () => {
          console.log("Edit Board");
        }
      },
      {
        text: "Delete Board",
        action: () => {
          dispatchData({ type: reduserData_actionType.deleteBoard, indexActiveBoard });
          setIndexActiveBoard(0);

        }
      },
    ];


  const [openNewCard, setOpenNewCard] = useState(false);


  return (
    <>
      <StyledHeader>
        <div>
          <Logo />
          {
            data && (data.boards !== undefined && data.boards.length > 0 && indexActiveBoard !== undefined)
              ? <h1> {data.boards[indexActiveBoard].name}</h1>
              : <h1> Boards missing </h1>
          }
        </div>
        <div>
          <Button onClick={() => { setOpenNewCard(true) }} text="+ Add new task" />
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
        </div>
      </StyledHeader>

      {
        openNewCard
          ?
          <AddNewtask closeSetState={setOpenNewCard} />
          :
          <></>
      }
    </>

  )
}

export default Header;
