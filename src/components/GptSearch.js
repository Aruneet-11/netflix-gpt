import React from 'react'
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import bgImg from '../utils/images/netflix-bg.jpg'; 

const GptSearch = () => {
  return (
    <div>
    <img  src={bgImg} alt="bg-img" className="fixed inset-0 w-full h-full object-cover -z-10"></img>
    <div className="">
    <GptSearchBar/>
    <GptMovieSuggestions/>
    </div>
        {/*
        Gpt Search bar 
        Gpt Movie Suggestion
        */ }
    </div>
  )
}

export default GptSearch