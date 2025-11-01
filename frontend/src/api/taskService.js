import axios from "axios";
const API_URL = "https://task-manager-app-u1mw.onrender.com/api/tasks";

// For getting all taks 
export const fetchTasks = async () => {
  const { data } = await axios.get(API_URL);
  return data.data;
};

// Creating new tasks
export const addTask = async (task) => {
  const { data } = await axios.post(API_URL, task);
  return data;
};

// updating task status
export const updateTaskStatus = async (id, status) => {
  const { data } = await axios.put(`${API_URL}/${id}`, { status });
  return data;
};

// deleting the Tasks 
export const deleteTask = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

// Edting the whole task 
export const editTask = async (id, updates) => {
  const { data } = await axios.put(`${API_URL}/${id}`, updates);
  return data;
};
