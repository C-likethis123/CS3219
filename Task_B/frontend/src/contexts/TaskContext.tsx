import React, {createContext, useState} from 'react';
import useTaskApi from '../api/useTaskApi';

interface TaskContextProps {
  children: React.ReactNode,
};

const useInitialiseState = () => {
  const [tasks, setTasks] = useState([]);

  const {getAllTasks} = useTaskApi();
  const getTasksHandler = async () => {
    const tasks = await getAllTasks();
    setTasks(tasks);
  };

  return {
    tasks,
    getTasksHandler,
  };
}

type InitialState = ReturnType<typeof useInitialiseState>;

export const TaskContext = createContext<InitialState>({} as InitialState);

export const TaskProvider: React.FC<TaskContextProps> = ({children}) => {
  const initialState = useInitialiseState();
  return (
    <TaskContext.Provider value={initialState}>
      {children}
    </TaskContext.Provider>
  );
};

