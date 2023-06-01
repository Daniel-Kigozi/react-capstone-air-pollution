import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countrySlice';
import pollutionReducer from './pollutionSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    pollution: pollutionReducer,
  },
});

export default store;
