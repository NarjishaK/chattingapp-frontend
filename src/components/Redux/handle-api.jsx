import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:5002';


//crete customer
export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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