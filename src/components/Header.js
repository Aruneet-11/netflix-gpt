import React from 'react'
import logo from '../utils/images/netflix-logo.png';
import userIcon from '../utils/images/user-icon.jpg';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
    <img  className="w-44" src={logo} alt="logo"/>
    <div className="flex m-4">
      <img alt="userIcon" src={userIcon} className="w-12 h-12 m-2"/>
      <button className="text-white p-2 m-2 font-bold" onClick={handleSignOut}>Sign out</button>
    </div>
    </div>
  )
}

export default Header