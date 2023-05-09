import React from 'react'
import { ReactComponent as IconBoard } from "../../../img/icon-board.svg";
import { Item } from './style';
import { useContext } from 'react';
import { SelectBoardContext } from '../../../Context/Context';


interface IPropsItemBoard {
  index: number;
  nameBoard: string;
  active: boolean;
};

const ItemBoard: React.FC<IPropsItemBoard> = (props) => {

  const { setIndexActiveBoard } = useContext(SelectBoardContext);


  return (
    <Item className={`${props.active ? 'active' : ''}`} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number = props.index) => {
      // (e.target as HTMLElement).classList.toggle('active');
      // console.log(index);
      setIndexActiveBoard && setIndexActiveBoard(index);
      // localStorage.setItem('indexActiveBoard', `${index}`);
    }}><IconBoard />{props.nameBoard}</Item>
  )
}

export default ItemBoard