import { Background, AskContainer } from './style';
import { useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';


export const Ask = (title: string, text: string, textBtn: string) => {
  
  const elPortal = document.querySelector("#ASK_container");
  
  if (elPortal) {
    
    const Ok = () => {
      // const childPortal = elPortal.firstChild;
      // childPortal && elPortal.removeChild(childPortal);
    }
    
    const Cancel = () => {
      // const childPortal = elPortal.firstChild;
      // childPortal && elPortal.removeChild(childPortal);
    }
    console.log(elPortal);

    // elPortal.append(
    // <Background>
    //   <AskContainer>
    //     <h3>Title</h3>
    //     <p>Text</p>
    //     <Button text="Delete" onClick={Ok} />
    //     <Button text="Cancel" onClick={Cancel} />
    //   </AskContainer>
    // </Background>
    // );

            //createPortal
    ReactDOM.render(
      <Background>
        <AskContainer>
          <h3>Title</h3>
          <p>Text</p>
          {/* <Button text="Delete" onClick={Ok} {...theme}/> */}
          {/* <Button text="Cancel" onClick={Cancel} /> */}
        </AskContainer>
      </Background>,
      elPortal);
  }
};




