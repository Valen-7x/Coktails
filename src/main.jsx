import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '../router/router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-[100%]'>
  <RouterProvider router={router}/>
</div>
)
