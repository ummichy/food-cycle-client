import React from 'react';
import {
  createBrowserRouter
} from "react-router";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MainLayout from '../Layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import Details from '../Pages/Details';
import AvailableFoods from '../Pages/AvailableFoods';
import AddFood from '../Pages/AddFood';
import ManageMyFoods from '../Pages/ManageMyFoods';
import MyFoodRequest from '../Pages/MyFoodRequest';

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
        path: "available-foods",
        element: <AvailableFoods />,
      },
       {
  path: "food/:id",
  element: (
    <Details></Details>
  ),
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
        path: "add-food",
         loader : () => fetch('http://localhost:3000/services'),
        element: <PrivateRoute>
   <AddFood></AddFood>
        </PrivateRoute>,
      },
      {
        path: "my-foods",
        element: <PrivateRoute>
   <ManageMyFoods></ManageMyFoods>
        </PrivateRoute>,
      },
      {
        path: "food-request",
        element: <PrivateRoute>
  <MyFoodRequest></MyFoodRequest>
        </PrivateRoute>,
      },
      
    ],
  },
  
  
]);
export default router;