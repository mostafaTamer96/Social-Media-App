import React from 'react'
import Home from './Components/Home/Home'

import LandingPage from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from "./Components/Login/Login"


export default function App() {
 let router= createBrowserRouter([
    {path:"",element:<Register/>},
    {path:"/auth",element:<Register/>},
    {path:"/home",element:<Home/>},
    {path:"*",element:<Login/>}
  ])
  return (
    < >
     <RouterProvider router={router} />
    
    </>
  )
}
