import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = () => {
   // ?. this is optional chaining is the nowPlaying movies is empty then it will not throw an error.
 const movies=useSelector(store => store.movies?.nowPlayingMovies);
 if(movies===null)return;
const mainMovie=movies?.[0];
const {original_title,overview,id}=mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieid={id}/>
    </div>
  )
}

export default MainContainer;