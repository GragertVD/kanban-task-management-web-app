import React from "react";
import { TaskCardProvider } from "../../../Context/Context";
import { ITask } from "../../../interface";
import TaskCard from "../TaskCard";


const TaskElContext: React.FC<ITask> = (props) => {

  const dataTask = props;

  return (
    <TaskCardProvider {...dataTask}>
      {/* <TaskCard /> */}
    </TaskCardProvider>
  )
}

export default TaskElContext;