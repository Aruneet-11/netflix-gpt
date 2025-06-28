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
    <img  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs" alt="bg-img"></img>
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