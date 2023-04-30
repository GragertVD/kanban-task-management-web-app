import React, { useContext } from 'react'
import styled from 'styled-components'
import ListBoard from './SideBar/ListBoard';
import BottomSideBar from './SideBar/BottomSideBar';
import dataContext from './Context';



const SideBarContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 14px 32px 30px;

  border-right: 1px solid ${props => props.theme.colors.linesLight};

`;

const SideBar = (props)=> {
  const data = useContext(dataContext);

 
  // const StateSideBarContext = React.createContext({
  //   StateSideBar: 'show',
  // });

  return ( 
    // <StateSideBarContext.Provider value={'show'}>
      <SideBarContainer>
        <ListBoard data={data}/>
        <BottomSideBar StateShowSideBar={props.StateShowSideBar} /> 
      </SideBarContainer>
    // </StateSideBarContext.Provider>
  )
}

export default SideBar