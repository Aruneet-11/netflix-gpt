import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {
  const [isSignInForm,setSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setSignInForm(!isSignInForm);
  }
  return (
    <div >
    <Header/>
    <div className="absolute">
    <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"></img>
    </div>
    <form className="absolute p-12 bg-black w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4 px-2 ">{isSignInForm? "Sign In":"Sign Up"}</h1>
      { !isSignInForm &&<input type="text" placeholder="Full Name" className="p-2 m-2 w-full " />}
      <input type="email" placeholder="Email" className="p-2 m-2 w-full" />
      <input type="password" placeholder="Password" className="p-2 m-2 w-full " />
      <button className="bg-red-600 text-white p-2 m-2 w-full rounded-lg">{isSignInForm? "Sign In":"Sign Up"}</button>
      <p className="py-4 m-2">{isSignInForm? "New to Netflix? ":"Already registered? "}<span className="text-white-600 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "Sign Up Now":"Sign In Now"}</span></p>
    </form>
    </div>
  )
}

export default Login