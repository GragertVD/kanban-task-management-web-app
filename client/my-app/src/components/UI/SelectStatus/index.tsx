import React, { useContext } from "react";
import { SelectStatusContainer } from "./style";
import { SelectBoardContext, TaskCardContext } from "../../../Context/Context";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IBoard, IData } from "../../../interface";
import { reduserDataTask_actionType } from "../../../Context/reduserDataTask";



const SelectStatus: React.FC = () => {

  const { dataTask, dispatchDataTask } = useContext(TaskCardContext);

  const { data, indexActiveBoard } = useContext(SelectBoardContext);


  const handleChange = (event: SelectChangeEvent) => {
    console.log("Change status");
    
    dispatchDataTask({ type: reduserDataTask_actionType.changeStatus, payload: event.target.value})
  };

  if (data && data.boards && indexActiveBoard !== undefined) {
    const activeBoard: IBoard = data.boards[indexActiveBoard];

    return (
      <SelectStatusContainer>
        <p>Current Status</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dataTask.status}
          label={dataTask.status}
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