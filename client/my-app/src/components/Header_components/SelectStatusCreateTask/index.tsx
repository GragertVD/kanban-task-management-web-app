import React, { useContext } from "react";
import { SelectStatusContainer } from "./style";
import { BoardsContext } from "../../../Context/Context";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IBoard } from "../../../interface";

interface ISelectStatusCreateTask{
  selectStatus: string;
  setSelectStatus: React.Dispatch<React.SetStateAction<string>>;
}

const SelectStatusCreateTask: React.FC<ISelectStatusCreateTask> = ({selectStatus, setSelectStatus}) => {

  const { data, indexActiveBoard } = useContext(BoardsContext);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectStatus(event.target.value);
  }

  if (data && data.boards && indexActiveBoard !== undefined) {
    const activeBoard: IBoard = data.boards[indexActiveBoard];

    return (
      <SelectStatusContainer>
        <p>Current Status</p>
        <Select
          SelectDisplayProps={{ style: { height: "40px", boxSizing: "border-box", padding: "8px 16px" } }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectStatus}
          label="status"
          onChange={handleChange}
        >
          {
            activeBoard.columns.length
              ?
              activeBoard.columns.map((column, index) => <MenuItem key={index} value={column.name}>{column.name}</MenuItem>)
              :
              <div>Error</div>
          }
        </Select>
      </SelectStatusContainer>
    )
  } else {
    return (
      <div>load</div>
    )
  }

}

export default SelectStatusCreateTask;