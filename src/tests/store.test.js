import store from '../redux/store';

const initialState = {
  countries: {
    continent: 'All',
    countries: [],
    error: '',
    stats: 'idle',
  },
  pollution: {
    error: '',
    pollutionData: {},
    stats: 'idle',
  },
};

describe('Test reducer function', () => {
  it('Test', () => {
    expect(store.getState()).toEqual(initialState);
  });
});
