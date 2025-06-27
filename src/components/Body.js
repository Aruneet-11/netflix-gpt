import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const Body = () => {

  const appRouter=createBrowserRouter([
    {
       path: '/',
       element: <Login/>
    },
    {
      //This route is authenticated. if you are autheticated then only you will move to this route.
      path:'/browse',
      element: <Browse/>
    },
])

  return (
    <div>
    <RouterProvider router={appRouter}/>
     
    </div>
  )
}

export default Body