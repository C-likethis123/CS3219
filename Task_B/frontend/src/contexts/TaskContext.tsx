import {CircularProgress} from '@material-ui/core';
import React, {createContext, useState, useEffect} from 'react';
import useTaskApi from '../api/useTaskApi';

interface TaskContextProps {
  children: React.ReactNode,
};

interface Task {
  id: string
  title: string
  date?: number
  description?: string
  isCompleted?: boolean
}

const useInitialiseState = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const {getAllTasksApi, createTaskApi, deleteTaskApi, editTaskApi} = useTaskApi();
  const getAllTasks = async () => {
    try {
      const tasks: Task[] = await getAllTasksApi();
      setTasks(tasks);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const createTask = async (task: Partial<Task>) => {
    try {
      const newTask: Task = await createTaskApi(task);
      setTasks([...tasks, newTask]);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const deletedTask = await deleteTaskApi(id);
      setTasks(tasks.filter(({id}) => id !== deletedTask));
    } catch (e) {
      console.log(e);
    }
  };

  const editTask = async (task: Partial<Task>) => {
    try {
      const editedTask = await editTaskApi(task);
      setTasks(tasks.map(task => {
        if (task.id === editedTask.id) {
          return editedTask;
        } else {
          return task;
        }
      }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return {
    isLoading,
    tasks,
    createTask,
    deleteTask,
    editTask,
  };
}

type InitialState = ReturnType<typeof useInitialiseState>;

export const TaskContext = createContext<InitialState>({} as InitialState);

export const TaskProvider: React.FC<TaskContextProps> = ({children}) => {
  const initialState = useInitialiseState();
  return (
    <TaskContext.Provider value={initialState}>
      {initialState.isLoading ? <CircularProgress /> : children}
    </TaskContext.Provider>
  );
};

