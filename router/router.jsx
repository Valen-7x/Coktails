import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Details from '../src/Details'; // Importa el componente Details
import App from '../src/App';
const router = createBrowserRouter([
   
          {
              path:'/',
              element: <App/>
          },
          {
            path:'/details/:id',
            element: <Details/>
        },
          
])
export default router

