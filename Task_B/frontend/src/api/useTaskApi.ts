import React from 'react';
import axiosInstance from './axiosConfig';


type Task = {
  id?: string
  title: string
};

const useTaskApi = () => {
  const getAllTasks = async () => {
    const {data: {data: tasks}} = await axiosInstance.get('/api/tasks/');
    return tasks;
  }

  const createTask = async (task: Task) => {
    const {data: createdTask} = await axiosInstance.post('/api/tasks/', task);
    return createdTask;
  }

  const deleteTask = async (id: string) => {
    const {data: {data: deletedId}} = await axiosInstance.delete(`api/tasks/${id}`);
    return deletedId;
  }
  return {getAllTasks, createTask, deleteTask};
};

export default useTaskApi;
