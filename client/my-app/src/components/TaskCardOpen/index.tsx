import { ITask } from "../../interface";
import { Background, CardContainer } from './style';
import { Dispatch, SetStateAction, ReactNode } from 'react';


type TypeSetState<T> = Dispatch<SetStateAction<T>>

interface ItaskCardOpen extends ITask {
  openCard: boolean;
  setOpenCard: TypeSetState<boolean>;
  children?: ReactNode;
}

const TaskCardOpen: React.FC<ItaskCardOpen> = (props) => {

  const closeCardFromKey = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      props.setOpenCard(false);
      document.removeEventListener('keydown', closeCardFromKey);
    }
  };

  if (props.openCard) {
    document.addEventListener('keydown', closeCardFromKey);
  }

  return (
    <Background openCard={props.openCard}
      onClick={() => props.setOpenCard(false)}
    >
      <CardContainer openCard={props.openCard}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </CardContainer>
    </Background>
  )
}

export default TaskCardOpen;