import React from 'react'
import { ToggleStyl } from './style';

export interface IPropsToggle {
  currentState: string;
  state: string[];
  setState: (state: string) => void;
};

const Toggle: React.FC<IPropsToggle> = (props) => {
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