import React from 'react'
import styled from 'styled-components'
import ListBoard from './SideBar/ListBoard';
import BottomSideBar from './SideBar/BottomSideBar';



const SideBarContainer = styled.div(props=>({
  transition: 'all 0.3s',
  left: props.stateShowSideBar === 'show'? '0px': '-300px',
  
    height: '100%',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 14px 32px 30px',
  
    borderRight: `1px solid ${props.theme.colors.linesLight}`,
    backgroundColor: `${props.theme.colors.white}`,
  
    position: `absolute`,
  
  

}));

const SideBar = (props)=> {

 
  // const StateSideBarContext = React.createContext({
  //   StateSideBar: 'show',
  // });

  return ( 
    // <StateSideBarContext.Provider value={'show'}>
    <SideBarContainer stateShowSideBar={props.StateShowSideBar.StateShowSideBar}>
      <ListBoard/>
      <BottomSideBar StateShowSideBar={props.StateShowSideBar} /> 
    </SideBarContainer>
    // </StateSideBarContext.Provider>
  )
}

export default SideBar