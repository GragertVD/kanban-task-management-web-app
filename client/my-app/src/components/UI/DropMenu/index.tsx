import React from 'react'
import { Background, DropMenuConteiner, DropMenuList } from './style';
import { useState, useEffect } from 'react';

export interface IDropMenuItem {
  text: string;
  action: () => void;
}

export const useDropMenu = (props: IDropMenuItem | IDropMenuItem[]) => {

  const [openDropMenu, setopenDropMenu] = useState(true);

  const DropMenuOpen = () => {
    setopenDropMenu(true);
  }

  const DropMenuWrapper: React.FC = () => {
    useEffect(() => {
      console.log("useEffect DropMenu");
      document.addEventListener("click", ()=>console.log(123))

      return () => {
      }
    }, []);

    if (openDropMenu)
      return (
        // <Background openDropMenu={openDropMenu}
        //   onClick={() => setopenDropMenu(false)}
        // >
        <>
          <DropMenuConteiner openDropMenu={openDropMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <DropMenuList>
              {
                Array.isArray(props)
                  ?
                  props.map((item, index) => <li key={index} onClick={item.action}>{item.text}</li>)
                  :
                  <li onClick={props.action}>{props.text}</li>
              }
            </DropMenuList>
          </DropMenuConteiner>
        </>
        // </Background>

      )
    else
      return (<></>)
  }

  return { DropMenuOpen, DropMenuWrapper }

};




export default useDropMenu;