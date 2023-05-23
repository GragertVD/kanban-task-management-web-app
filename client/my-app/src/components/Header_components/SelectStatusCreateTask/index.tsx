import React, { useContext } from "react";
import { SelectStatusContainer } from "./style";
import { BoardsContext } from "../../../Context/Context";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IBoard } from "../../../interface";
import { ThemeContext } from "../../../App";

interface ISelectStatusCreateTask {
  selectStatus: string;
  setSelectStatus: React.Dispatch<React.SetStateAction<string>>;
}

const SelectStatusCreateTask: React.FC<ISelectStatusCreateTask> = ({ selectStatus, setSelectStatus }) => {

  const { data, indexActiveBoard } = useContext(BoardsContext);
  const { theme } = useContext(ThemeContext);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectStatus(event.target.value);
  }

  if (data && data.boards && indexActiveBoard !== undefined) {
    const activeBoard: IBoard = data.boards[indexActiveBoard];

    return (
      <SelectStatusContainer>
        <p>Current Status</p>
        <Select
          SelectDisplayProps={
            theme === "light"
              ?
              { style: { height: "40px", boxSizing: "border-box", padding: "8px 16px", overflow: "initial" } }
              :
              { style: { height: "40px", boxSizing: "border-box", padding: "8px 16px", color: "white", border: "2px solid rgba(130, 143, 163, 0.25)", overflow: "initial" } }
          } labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectStatus}
          label="status"
          onChange={handleChange}
        >
          {
            activeBoard.columns.length
              ?
              activeBoard.columns.map((column, index) => <MenuItem
                key={index} value={column.name}
                style={
                  theme === "light"
                    ?
                    { paddingTop: "8px", marginTop: "-8px", paddingBottom: "8px", marginBottom: "-8px" }
                    :
                    { paddingTop: "8px", marginTop: "-8px", paddingBottom: "8px", marginBottom: "-8px", color: "white", backgroundColor: "#20212C" }
                }
              >{column.name}</MenuItem>)
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