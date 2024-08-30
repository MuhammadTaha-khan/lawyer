// src/features/appointmentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  service: null,
  date: null,
  time: null,
  basicDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  }
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setService: (state, action) => {
      state.service = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setBasicDetails: (state, action) => {
      state.basicDetails = action.payload;
    }
  }
});

export const { setService, setDate, setTime, setBasicDetails } = appointmentSlice.actions;

export default appointmentSlice.reducer;
