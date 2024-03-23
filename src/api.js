// Import Axios library
import axios from "axios";

const BASE_URL = "http://localhost:5000/";

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Function to fetch all boards
export const getAllBoards = async () => {
  try {
    const response = await client.get(`/boards`);
    return response.data;
  } catch (error) {
    console.error("Error fetching boards:", error);
    throw error;
  }
};

// Function to create a new board
export const createBoard = async (header, lat, lon) => {
  try {
    const response = await client.post(`/boards`, {
      header,
      lat,
      lon,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating board:", error);
    throw error;
  }
};

// Function to fetch a specific board by ID
export const getBoardById = async (boardId) => {
  try {
    const response = await client.get(`/boards/${boardId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching board ${boardId}:`, error);
    throw error;
  }
};

// Function to fetch all users
export const getAllUsers = async () => {
  try {
    const response = await client.get(`/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Function to create a new user
export const createUser = async (
  username,
  password,
  birthYear,
  homeLat,
  homeLon,
  gender,
) => {
  try {
    const response = await client.post(`/users`, {
      username,
      password,
      birthYear,
      homeLat,
      homeLon,
      gender,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const createPost = async (header, content, posLat, posLon) => {
  try {
    const response = await client.post(`/posts`, {
      header,
      content,
      pos_lat: posLat,
      pos_lon: posLon,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const getPostsInCity = async (cityname) => {
  try {
    const response = await client.get(`/posts/city/${cityname}`);
    return response.data;
  } catch (error) {
    console.error("Error getting posts in city:", error);
    throw error;
  }
};

export const getPostsInSuburb = async (cityname, suburb) => {
  try {
    const response = await client.get(
      `/posts/city/${cityname}/${suburb}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error getting posts in suburb:", error);
    throw error;
  }
};
