import React from 'react'
import logo from '../utils/images/netflix-logo.png';
import userIcon from '../utils/images/user-icon.jpg';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';  
import {toggleGptSearchView} from '../utils/gptSlice';
import {SUPPORTED_LANGUAGES} from './constants'
import {changeLanguage} from '../utils/configSlice';
const Header = () => {
  
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
         //SignIn and SignUp 
          const {uid,email,displayName} = user;
          // Dispatch an action to update the user state in Redux store
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          // Navigate to the browse page
          navigate('/browse');
         
        } else {
          // User is signed out
          dispatch(removeUser());
          // Navigate to the login page
          navigate('/');
  
        }
      });
// unsubscribe from the auth state listener when the component unmounts
      return ()=>unsubscribe();
    },[]);
    const handleGptSearch=()=>{
      //Toggle my GPT search.
       dispatch(toggleGptSearchView());
      }
      const handleLanguageChange=(e)=>{
        //Perform change Language 
       dispatch(changeLanguage(e.target.value));
      }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row md:justify-between">
    <img  className="w-44 mx-auto md:mx-0" src={logo} alt="logo"/>
    {user &&<div className="flex m-4 justify-between">
    {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
    </select>}
    <button className="py-2 px-4 mx-4 my-2 bg-red-600 text-white rounded-lg" onClick={handleGptSearch}> {showGptSearch? "Home Page" : "GPT Search"}</button>
      <img alt="userIcon" src={userIcon} className=" hidden md:block w-12 h-12 m-2"/>
      {user && <p className=" hidden text-white m-2">{user.displayName}</p>}
      <button className="text-white p-2 m-2 font-bold" onClick={handleSignOut}>Sign out</button>
    </div>}
    </div>
  )
}

export default Header