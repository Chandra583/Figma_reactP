// main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home.jsx/Home';
import Login from './components/Login/Login.jsx';

const routes = createRoutesFromElements(
  <Route path=''>
    <Route path='' element={<Login />} />
    <Route path='home' element={<Home />} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
