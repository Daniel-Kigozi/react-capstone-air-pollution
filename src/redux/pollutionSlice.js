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

  const { country } = params;
  const data = await response.json();

  const { list: [{ main: { aqi: quality }, components: { co, no, no2 } }] } = data;

  // const stringQuality = quality === 1 ? 'Good' : quality === 2 ? 'Fair'
  //   : quality === 3 ? 'Moderate' : quality === 4 ? 'Poor' : quality === 5 ? 'Very Poor' : null;
  let stringQuality = null;

  switch (quality) {
    case 1:
      stringQuality = 'Good';
      break;
    case 2:
      stringQuality = 'Fair';
      break;
    case 3:
      stringQuality = 'Moderate';
      break;
    case 4:
      stringQuality = 'Poor';
      break;
    case 5:
      stringQuality = 'Very Poor';
      break;
    default:
      stringQuality = null;
      break;
  }

  const airData = {
    country, stringQuality, co, no, no2,
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
        state.pollutionData[country] = rest;
      })

      .addCase(fetchPollutionData.rejected, (state, action) => {
        state.stats = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectPollutionData = (country) => (state) => state.pollution.pollutionData[country];

export default pollutionSlice.reducer;
