import { createSlice } from '@reduxjs/toolkit';
import { cities } from '../../helper/const';

const initialState = {
  cities
};

export const citiesSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload.data);
    }
  }
});

export const { addCity } = citiesSlice.actions;

export default citiesSlice.reducer;
