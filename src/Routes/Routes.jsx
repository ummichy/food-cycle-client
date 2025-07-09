import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MainLayout from '../Layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import AddService from '../Pages/AddService';
import MyServices from '../Pages/MyServices';
import MyReviews from '../Pages/MyReviews';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
 
      {
        path: "login",
        
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-service",
        element: <PrivateRoute>
   <AddService></AddService>
        </PrivateRoute>,
      },
      {
        path: "my-services",
        element: <PrivateRoute>
   <MyServices></MyServices>
        </PrivateRoute>,
      },
      {
        path: "my-reviews",
        element: <PrivateRoute>
  <MyReviews></MyReviews>
        </PrivateRoute>,
      },
      
    ],
  },
  
  
]);
export default router;