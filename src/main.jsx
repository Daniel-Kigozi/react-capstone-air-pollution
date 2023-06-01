import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/home';
import Pollution from './components/pollution';
import store from './redux/store';

import { fetchAllCountries } from './redux/countrySlice';

store.dispatch(fetchAllCountries());

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: ':city',
    element: <Pollution />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>,
);
