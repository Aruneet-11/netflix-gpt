import React from 'react'
import lang from "../utils/languageConstants";
import {useSelector} from "react-redux";
import {useRef} from "react";
import ai from "../utils/openai";
import {API_OPTIONS} from "./constants.js";
import {useDispatch} from "react-redux";
import {addgptMovieResults} from "../utils/gptSlice";
const GptSearchBar = () => {
    const langKey=useSelector((store)=>store.config.lang);
    const searchText=useRef(null);
    const dispatch=useDispatch();
    //search movie in TMDB.
    const searchMovieTMDB =async(movie)=>{
       const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
       const json= await data.json();
       return json.results;
    };
    
    
    const handleGptSearchClick=async ()=>{
      console.log("Search Text: ", searchText.current.value);
      // we will use this search text to make the api calls.
      // will make an api call to GPT apis and get movie results.
      const gptQuery="Act as a movie recommendation system and suggest  some movies based on the following query: " + searchText.current.value+". Only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Gadar, Sitare Zameen Par, 3 Idiots, Lagaan, Dangal";
      const gptResults=await ai.models.generateContent({
        contents: gptQuery,
        model: 'gemini-2.0-flash-001',
      });
      if(!gptResults.text){
        //To-do Error handling
      }
      console.log(gptResults.text);
      const movieNames=gptResults.text.split(",");
      //For each movie name i will call TMDB api to get the movie details.
      const promiseArray= movieNames.map(movie=>searchMovieTMDB(movie));  
       // resolving the promises to get the movie details once all the promises are resolved then only it will resolve.
      const movieDetails=await Promise.all(promiseArray);

      console.log( "Movie Details: ", movieDetails);
      dispatch(addgptMovieResults({movieNames:movieNames, movieResults:movieDetails}));
    }
  
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={searchText} type="text" placeholder={lang[langKey].gptSearchPlaceholder} className="p-4 m-4 col-span-9"/>
            <button className=" m-4 px-4 py-2 bg-red-600 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar