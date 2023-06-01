import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import CityCard from '../components/city';


const fakeData = {
    name: 'name', continent: 'continent', flag: 'flag', lat: 'lat', lon: 'lon',
  };

  test('should render CityCard', () => {
    render(
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" component={<CityCard name="Uganda" continent="Africa" flag="Uganda" lat="lat" lon="lon" props={fakeData} />}/>
            </Routes>
          </BrowserRouter>
        </Provider>);
      });
