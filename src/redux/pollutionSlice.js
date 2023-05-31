import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'ca2e752ce03cb06d9bf343afe17561d4';

const initialState = {
  pollutionData: {},
  stats: 'idle',
  error: '',

};
export const fetchPollutionData = createAsyncThunk('pollution/fetchPollutionData', async (params) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?${new URLSearchParams({
    lat: params.lat,
    lon: params.lon,
    appid: API_KEY,
  })}`);

  const country = params.name;
  const data = await response.json();

  const { list: [{ main: { aqi: quality }, components: { co, no, no2 } }] } = data;

  const airData = {
    country, quality, co, no, no2,
  };

  return airData;
});

const pollutionSlice = createSlice({
  name: 'pollution',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPollutionData.pending, (state) => {
        state.stats = 'loading';
      })
      .addCase(fetchPollutionData.fulfilled, (state, action) => {
        state.stats = 'succeeded';
        state.error = '';
        const { country, ...rest } = action.payload;
        state.pollutionData.country = rest;
      })
      .addCase(fetchPollutionData.rejected, (state, action) => {
        state.stats = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pollutionSlice.reducer;
