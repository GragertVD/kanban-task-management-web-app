import React, { useContext } from "react";
import { SelectStatusContainer } from "./style";
import { BoardsContext, TaskCardContext } from "../../../Context/Context";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IBoard } from "../../../interface";
import { reduserDataTask_actionType } from "../../../Context/reduserDataTask";


const SelectStatus: React.FC = () => {

  const { dataTask, dispatchDataTask } = useContext(TaskCardContext);
  const { dispatchData, data, indexActiveBoard } = useContext(BoardsContext);

  const handleChange = (event: SelectChangeEvent) => {
    dispatchDataTask({ type: reduserDataTask_actionType.changeStatus, payload: event.target.value });
  }

  if (data && data.boards && indexActiveBoard !== undefined) {
    const activeBoard: IBoard = data.boards[indexActiveBoard];

    return (
      <SelectStatusContainer>
        <p>Current Status</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dataTask.status}
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

export default SelectStatus;