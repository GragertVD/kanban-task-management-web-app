import React from 'react'
import { ReactComponent as IconBoard } from "../../../img/icon-board.svg";
import { Item } from './style';


interface IPropsItemBoard {
  key: number;
  nameBoard: string;
};

const ItemBoard: React.FC<IPropsItemBoard> = (props) => {
  return (
    <Item onClick={e => {
      (e.target as HTMLElement).classList.toggle('active'); 
    }}><IconBoard />{props.nameBoard}</Item>
  )
}

export default ItemBoard