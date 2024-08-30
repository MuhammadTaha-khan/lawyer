// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../features/appointmentSlice';

const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
  },
});

export default store;
