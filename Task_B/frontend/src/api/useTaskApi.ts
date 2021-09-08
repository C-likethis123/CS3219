import React from 'react';
import axiosInstance from './axiosConfig';

type Task = {
  id?: string
  title: string
};

const API_PREFIX = '/api/tasks';

const useTaskApi = () => {
  const getAllTasksApi = async () => {
    const {data: {data: tasks}} = await axiosInstance.get(API_PREFIX);
    return tasks;
  }

  const createTaskApi = async (task: Partial<Task>) => {
    const {data: {data: createdTask}} = await axiosInstance.post(API_PREFIX, task);
    return createdTask;
  }

  const deleteTaskApi = async (id: string) => {
    const {data: {data: deletedId}} = await axiosInstance.delete(`${API_PREFIX}/${id}`);
    return deletedId;
  }

  const editTaskApi = async (task: Task) => {
    const {data: {data: editedTask}} = await axiosInstance.post(`${API_PREFIX}/${task.id}`);
    return editedTask;
  }
  return {getAllTasksApi, createTaskApi, deleteTaskApi, editTaskApi};
};

export default useTaskApi;
