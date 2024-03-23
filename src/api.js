// Import Axios library
import axios from 'axios';

// Base URL of the Flask API
const BASE_URL = 'http://localhost:5000/';

// Function to fetch all boards
export const getAllBoards = async () => {
  try {
    const response = await axios.get(`${BASE_URL}boards`);
    return response.data;
  } catch (error) {
    console.error('Error fetching boards:', error);
    throw error;
  }
};

// Function to create a new board
export const createBoard = async (header, lat, lon) => {
  try {
    const response = await axios.post(`${BASE_URL}boards`, { header, lat, lon });
    return response.data;
  } catch (error) {
    console.error('Error creating board:', error);
    throw error;
  }
};

// Function to fetch a specific board by ID
export const getBoardById = async (boardId) => {
  try {
    const response = await axios.get(`${BASE_URL}boards/${boardId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching board ${boardId}:`, error);
    throw error;
  }
};

// Function to fetch all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Function to create a new user
export const createUser = async (username, password, birthYear, homeLat, homeLon, gender) => {
  try {
    const response = await axios.post(`${BASE_URL}users`, { username, password, birthYear, homeLat, homeLon, gender });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
