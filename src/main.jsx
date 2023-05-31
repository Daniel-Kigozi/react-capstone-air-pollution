import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pollution from './components/pollution'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: ':city',
    element: <Pollution />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
