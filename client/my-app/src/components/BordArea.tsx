import React, { useContext } from 'react'
import styled from 'styled-components';
import { IBoard, IData, IPropsToggleShowSideBar } from '../interface';
import BoardEmpty from './BoardArea/BoardEmpty';
import BoardColumn from './BoardArea/BoardColumn';
import { SelectBoardContext } from '../Context/Context';


const BoardAreaContainer = styled.div<{ StateShowSideBar: 'show' | 'hiden', countColumn: number }>`
  background-color: ${props => props.theme.colors.lightGrey};
  /* height: 100%; */
  overflow: auto;
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

  // const data: IData = useContext(dataContext);
  let data: IData | undefined;
  const dataBoardsString: string | null = localStorage.getItem('dataBoards');
  if (dataBoardsString) {
    data = JSON.parse(dataBoardsString);
  }

  // let indexActiveBoard: string | null = localStorage.getItem('indexActiveBoard');
  const { indexActiveBoard } = useContext(SelectBoardContext);


  if (data && data.boards !== undefined) {
    // console.log(data.boards[0].columns);
    const activeBoard: IBoard = data.boards[indexActiveBoard ? indexActiveBoard : 0];
    return (
      <BoardAreaContainer StateShowSideBar={props.StateShowSideBar.StateShowSideBar} countColumn={activeBoard.columns.length}>
        {
          activeBoard.columns.length ?
            activeBoard.columns.map((dataColumn, index) => <BoardColumn key={index} name={dataColumn.name} tasks={dataColumn.tasks} />)
          :
            <BoardEmpty />
        }

      </BoardAreaContainer>
    )
  } else {
    return (
      <div>load</div>
    )
  }

}
