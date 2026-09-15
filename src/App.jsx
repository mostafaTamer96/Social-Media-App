import React from 'react'
import Home from './Components/Home/Home'

import LandingPage from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Components/Register/Register'



export default function App() {
 let router= createBrowserRouter([
    {path:"",element:<Register/>},
    {path:"/auth",element:<Register/>},
    {path:"/home",element:<Home/>},
  
  ])
  return (
    < >
     <RouterProvider router={router} />
    
    </>
  )
}
