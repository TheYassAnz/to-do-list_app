import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import { redirect } from 'react-router-dom';

const action = async () => {
  return redirect("/home");
};

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<Header />}
    render={() => { }}
  >
    <Route index element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);