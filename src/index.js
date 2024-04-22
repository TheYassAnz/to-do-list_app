import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { redirect } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);