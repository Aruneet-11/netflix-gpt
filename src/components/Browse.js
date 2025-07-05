import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import {useNowPlayingMovies} from '../hooks/useNowPlayingMovies';
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
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