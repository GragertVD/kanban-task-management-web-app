import styled from 'styled-components';


export const Background = styled.div`
  /* background-color: black; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  transition: all 0.35s;
  background-color: rgba(0, 0, 0, 0.35);
  pointer-events: all;
  /* pointer-events: all; */

`;

export const AskContainer = styled.div`
  background-color: transparent;

  transition: all 0.35s;

`;