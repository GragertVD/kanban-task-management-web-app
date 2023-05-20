import { SubtaskItemContainer } from "./style"
import { ChangeEvent } from 'react';

interface ICreateSubtaskItem {
  value: string;
  index: number;
  onChange: (e: ChangeEvent<HTMLInputElement>)=>void;
}

export const CreateSubtaskItem: React.FC<ICreateSubtaskItem> = ({ value, index, onChange }) => {

  return (
    <SubtaskItemContainer>
      <input
        value={value}
        onChange={onChange}
        placeholder="e.g. Make coffee"
        type="text"
        data-index={index}
      />
    </SubtaskItemContainer>
  )
}
