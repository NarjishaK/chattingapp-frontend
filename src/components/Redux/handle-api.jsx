import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = 'http://localhost:5002';

 
//crete customer
export const registerUser = createAsyncThunk("auth/register", async (userData) => {
    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });
  
    const response = await axios.post(`${BASE_URL}/users`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  
    return response.data;
  });
  

  // Async function to fetch all customers
export const fetchUsers = createAsyncThunk('auth/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})