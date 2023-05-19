import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './UI/Logo'
import Button from './UI/Button'
import iconMenu from "../img/icon-vertical-ellipsis.svg";
import { useContext } from 'react';
import { BoardsContext } from '../Context/Context';
import DropMenu, { IMenuItem } from './UI/DropMenu';
import { reduserData_actionType } from '../Context/reduserData';
import { AddNewtask } from './AddNewTask';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  padding: 20px 30px 28px 24px;
  border-bottom: 1px solid ${props => props.theme.colors.linesLight};
  & div{
    display: flex;
    align-items: center;
    gap: 25px;
    /* height: 100%; */

    img{
      flex: 0 1 45px;
      /* width: 45px; */
      padding: 0 20px;
      cursor: pointer;
    }
  }
`;

const Header = () => {

  const { dispatchData, data, indexActiveBoard } = useContext(BoardsContext);
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
          console.log("Delete Board");
          dispatchData({ type: reduserData_actionType.deleteBoard, indexActiveBoard });
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
            data && (data.boards !== undefined && indexActiveBoard !== undefined)
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
          <AddNewtask close={setOpenNewCard} />
          :
          <></>
      }
    </>

  )
}

export default Header;
