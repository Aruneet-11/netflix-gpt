import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import {useNowPlayingMovies} from '../hooks/useNowPlayingMovies';
import {usePopularMovies} from '../hooks/usePopularMovies';
import {useTopRated} from "../hooks/useTopRated";
import {useSelector} from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  return (
    <div>
    <Header/>
    {
      showGptSearch? <GptSearch/>:<> <MainContainer/>
      <SecondaryContainer/></>
    }

    {/*
       Main Container
       -video in the background
       -Video Title
       -Video Description

       Secondary Container
       -Movie List*n 
       -cards*n 
    */}
    </div>
  )
}

export default Browse;