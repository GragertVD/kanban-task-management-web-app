import React, { useContext } from 'react'
import styled from 'styled-components';
import { IBoard, IPropsToggleShowSideBar } from '../interface';
import BoardEmpty from './BoardArea/BoardEmpty';
import BoardColumn from './BoardArea/BoardColumn';
import { BoardsContext } from '../Context/Context';
import AddColumn from './BoardArea/AddColumn';


const BoardAreaContainer = styled.div<{ StateShowSideBar: 'show' | 'hiden', countColumn: number }>`
  background-color: ${props => props.theme.colors.lightGrey};
  /* height: 100%; */
  overflow: auto;
   &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.mainPurpleHover};
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar-corner {
    background-color: ${props => props.theme.colors.mediumGrey};
    border-radius: 20px;
    
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-radius: 20px;
    
  }
  & {
    -ms-overflow-style: auto;
    scrollbar-color: ${props => props.theme.colors.mainPurpleHover} ${props => props.theme.colors.mediumGrey};
    scrollbar-width: thin;
  }
  width: 100vw;
  transition: all 0.3s;
  padding-top: 24px;
  padding-right: 24px;
  padding-left: ${props => props.StateShowSideBar === 'show' ? '324px' : '24px'};
  padding-bottom: 106px;
  
  display: grid;
  grid-template-columns: ${props => `repeat(${props.countColumn}, minmax(250px, 300px))`};
  grid-gap: 24px;
`;


export const BordArea: React.FC<IPropsToggleShowSideBar> = (props) => {

  const { data, indexActiveBoard } = useContext(BoardsContext);


  if (data && data.boards !== undefined && indexActiveBoard !== undefined) {
    const activeBoard: IBoard = data.boards[indexActiveBoard];
    
    if (activeBoard.columns.length) {
      return (
        <BoardAreaContainer StateShowSideBar={props.StateShowSideBar.StateShowSideBar} countColumn={activeBoard.columns.length + 1}>
          {
            activeBoard.columns.map((dataColumn, index) => <BoardColumn key={index} index={index} {...dataColumn} />)
          }
          < AddColumn />
        </BoardAreaContainer>
      )
    } else {
      return (
        <BoardAreaContainer StateShowSideBar={props.StateShowSideBar.StateShowSideBar} countColumn={0}>
          <BoardEmpty />
        </BoardAreaContainer>
      )
    }
  } else {
    return (
      <div>load</div>
    )
  }

}
