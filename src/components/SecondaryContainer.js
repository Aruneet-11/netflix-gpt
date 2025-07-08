import React from 'react'
import MovieList from './MovieList';
import {useSelector} from 'react-redux';
const SecondayContainer = () => {

  const movies=useSelector(store=>store.movies);
  return (
    
    <div className="bg-black min-h-screen">
    <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
    <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Top Rated"} movies={movies.topRated}/>
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    
    </div>
    {/*
     MovieList-Popular
     moviecards*n
     MovieList-Tending
     MovieList-NowPlaying
     MovieList-Horror

    */}</div>
  )
}

export default SecondayContainer;