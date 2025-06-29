import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useEffect} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
const Body = () => {
   const dispatch=useDispatch();
 
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
        // Dispatch an action to update the user state in Redux store
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
 
       
      } else {
        // User is signed out
        dispatch(removeUser());
     

      }
    });
  },[]);

  return (
    <div>
    <RouterProvider router={appRouter}/>
     
    </div>
  )
}

export default Body