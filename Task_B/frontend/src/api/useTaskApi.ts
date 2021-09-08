import React from 'react';
import axiosInstance from './axiosConfig';

type Task = {
  id?: string
  title: string
};

const API_PREFIX = '/api/tasks';

const useTaskApi = () => {
  const getAllTasks = async () => {
    const {data: {data: tasks}} = await axiosInstance.get(API_PREFIX);
    return tasks;
  }

  const createTask = async (task: Task) => {
    const {data: createdTask} = await axiosInstance.post(API_PREFIX, task);
    return createdTask;
  }

  const deleteTask = async (id: string) => {
    const {data: {data: deletedId}} = await axiosInstance.delete(`${API_PREFIX}/${id}`);
    return deletedId;
  }
  return {getAllTasks, createTask, deleteTask};
};

export default useTaskApi;
