import React from 'react'
import styled from 'styled-components'

const ToggleStyl = styled.div`
  width: 40px;
  height: 20px;
  background: ${props => props.theme.colors.mainPurple};
  border-radius: 12px;

  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
  transition: all 0.1s;
  &:hover{
    background: ${props => props.theme.colors.mainPurpleHover};
  }

  &::before{
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    background: ${props => props.theme.colors.white};
    
    position: absolute;
    left: ${props => {
      if(props.currentState === props.state[0])
        return('4px');
      if (props.currentState === props.state[1])
        return ('22px');
    }};
    transition: all 0.25s;    
  }

`;

const Toggle = (props) => {
  return (
    <ToggleStyl 
      {...props} 
      onClick={
        () => {
          if (props.currentState === props.state[0])
            props.setState(props.state[1]);
          if (props.currentState === props.state[1])
            props.setState(props.state[0]);
        }
      }
    ></ToggleStyl>
  )
}

export default Toggle