import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react';
import {checkValidateData} from '../utils/Validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'; 
const Login = () => {
  const [isSignInForm,setSignInForm]=useState(true);
  const [errmsg,setErrmsg]=useState(null);

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const handleButtonClick=()=>{ 
    //Validate the form data.
    console.log(name?.current?.value);
    console.log(email?.current?.value);
    console.log(password?.current?.value);
    const msg=checkValidateData(name?.current?.value,email?.current?.value,password?.current?.value);
    setErrmsg(msg);
    //if this is valid then I can proceed with signin/signup.
    if(msg) return; //if msg is not null then we can return and show the error message.
    if(!isSignInForm){
      //For SignUp
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrmsg(errorCode+" : "+errorMessage);
      });
    }
    else{
      //signin logic
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrmsg(errorCode+" : "+errorMessage);
  });

    }
  }
  const toggleSignInForm=()=>{
    setSignInForm(!isSignInForm);
  }

  return (
    <div >
    <Header/>
    <div className="absolute">
    <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"></img>
    </div>
    <form onSubmit= {(e)=>e.preventDefault()}className="absolute p-12 bg-black w-3/12 my-40 mx-auto right-0 left-0  rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4 px-2 text-white">{isSignInForm? "Sign In":"Sign Up"}</h1>
      { !isSignInForm &&<input ref={name} type="text" placeholder="Full Name" className="p-2 m-2 w-full " />}
      <input ref={email} type="email" placeholder="Email" className="p-2 m-2 w-full" />
      <input ref={password} type="password" placeholder="Password" className="p-2 m-2 w-full " />
      <p className="text-red-600 mx-2 ">{errmsg}</p>
      <button className="bg-red-600 text-white p-2 m-2 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
      <p className="py-4 m-2 text-white">{isSignInForm? "New to Netflix? ":"Already registered? "}<span className="text-white-600 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "Sign Up Now":"Sign In Now"}</span></p>
    </form>
    </div>
  )

}

export default Login;