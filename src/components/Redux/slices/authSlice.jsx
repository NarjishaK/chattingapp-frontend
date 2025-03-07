import { createSlice } from '@reduxjs/toolkit';
import { registerUser,fetchUsers } from '../handle-api';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    users: [], // Store fetched users
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

    // register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
