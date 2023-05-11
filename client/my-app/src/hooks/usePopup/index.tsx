import { Background, CardContainer } from './style';
import { ReactNode, useState } from 'react';

interface Popup {
  children?: ReactNode;
}

export const usePopup = () => {

  const [openPopup, setOpenPopup] = useState(false);

  const popupOpen = () => {
    setOpenPopup(true);
  }


  const PopupWrapper: React.FC<Popup> = (props) => {

    const closeCardFromKey = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setOpenPopup(false);
        document.removeEventListener('keydown', closeCardFromKey);
      }
    };

    if (openPopup) {
      document.addEventListener('keydown', closeCardFromKey);
    }

    return (
      <Background openCard={openPopup}
        onClick={() => setOpenPopup(false)}
      >
        <CardContainer openCard={openPopup}
          onClick={(e) => e.stopPropagation()}
        >
          {props.children}
        </CardContainer>
      </Background>
    )
  };

  return { popupOpen, PopupWrapper }

};



