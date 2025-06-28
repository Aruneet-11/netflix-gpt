import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
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
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       //SignIn and SignUp 
        const {uid,email,displayName} = user;
        console.log("User is signed in with uid: ", uid);
      } else {
        // User is signed out
        // ...
      }
    });
  },[])

  return (
    <div>
    <RouterProvider router={appRouter}/>
     
    </div>
  )
}

export default Body