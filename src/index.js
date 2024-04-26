import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';

import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

const isAuthenticated = () => {
  return !!Cookies.get('token');
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<Header />}
  >
    <Route index element={<Navigate to="/home" replace />} />
    <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to='/login' replace />} />
    {/* <Route path="/home" element={<Home />} /> */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path='/logout' element={<Logout />} />
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);