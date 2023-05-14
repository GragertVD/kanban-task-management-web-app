import React from 'react'
import { Background, DropMenuConteiner, DropMenuList } from './style';
import { useState } from 'react';

export interface IDropMenuItem {
  text: string;
  action: () => void;
}


export const useDropMenu = (props: IDropMenuItem | IDropMenuItem[]) => {

  const [openDropMenu, setopenDropMenu] = useState(false);

  const DropMenuOpen = () => {
    setopenDropMenu(true);
  }


  const DropMenuWrapper: React.FC = () => {

    return (
      <Background openDropMenu={openDropMenu}
        onClick={() => setopenDropMenu(false)}
      >
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
      </Background>


    )
  }

  return { DropMenuOpen, DropMenuWrapper }

};




export default useDropMenu;