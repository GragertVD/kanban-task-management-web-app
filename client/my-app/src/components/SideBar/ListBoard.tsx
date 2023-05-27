import { useContext } from 'react'
import ItemBoard from './ItemBoard'
import CreateItemBoard from './CreateItemBoard';
import { BoardsContext } from '../../Context/Context';
import styled from 'styled-components';


const ListBoardContainer = styled.div`

  overflow-y: auto;
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
  margin-bottom: 10px;
  margin-left: -30px;
  padding-left: 30px;
  ${props => props.theme.beforeTablet}{
    margin-left: -22px;
    padding-left: 22px;
  }
`;


function ListBoard() {

  const { data, indexActiveBoard } = useContext(BoardsContext);


  if (data && data.boards)
    return (
      <ListBoardContainer>
        {data.boards
          ? data.boards.map(
            (data, index) =>
              <ItemBoard
                key={index}
                index={index}
                active={index === Number(indexActiveBoard) ? true : false}
                nameBoard={data.name}
              />
          )
          : <div>Пусто</div>
        }
        <CreateItemBoard />
      </ListBoardContainer>
    )
  else
    return (<div>load</div>)
}

export default ListBoard