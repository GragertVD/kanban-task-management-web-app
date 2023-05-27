export interface IPropsToggleShowSideBar {
  // StateShowSideBar: {
    StateShowSideBar: 'show' | 'hiden';
    setStateShowSideBar: (state: 'show' | 'hiden') => void;
  // };
}

export interface IData {
  boards?: IBoard[];
}

export interface IBoard {
  name: string;
  columns: IColumn[];
}

export interface IColumn {
  name: string;
  tasks: ITask[];
}

export interface ITask {
  title: string;
  description?: string;
  status: string;
  subtasks?: ISubtask[];
}

export interface ISubtask {
  title: string;
  isCompleted: boolean;
}