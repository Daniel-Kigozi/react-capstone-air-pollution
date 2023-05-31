import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  stats: 'idle',
  error: '',
};

export const fetchAllCountries = createAsyncThunk(
  'countries/fetchAllCountries', async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    const sortedCountries = [];

    // destructer data to get only what we want
    data.forEach((country) => {
      const {
        name: { common: name }, region: continent, latlng: [lat, lng], flags: { svg: flag },
      } = country;

      const newCountry = {
        name, continent, lat, lon: lng, flag,
      };

      sortedCountries.push(newCountry);
    });

    return sortedCountries;
  },
);

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.stats = 'loading';
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.stats = 'succeeded';
        state.error = '';
        state.countries = [...action.payload];
      })
      .addCase(fetchAllCountries.rejected, (state, action) => {
        state.stats = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllCountries = (state) => state.countries.countries;

export default countriesSlice.reducer;
