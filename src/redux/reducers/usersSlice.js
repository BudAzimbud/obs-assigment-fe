import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsersApi } from '../../helper/services/users';

const initialState = {
  users: []
};

export const getUsers = createAsyncThunk('users/get', async (query) => {
  const response = await getUsersApi(query);
  return response.data;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload.data);
    },
    editUser: (state, action) => {
      const findIndex = state.users.findIndex((item) => item.id === action.payload.data.id);
      state.users[findIndex] = action.payload.data;
    },
    deleteUser: (state, action) => {
      const filterUser = state.users.filter((item) => item.id !== action.payload);
      state.users = filterUser;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  }
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
