import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducers/usersSlice';
import citiesSlice from './reducers/citiesSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    cities: citiesSlice
  }
});
