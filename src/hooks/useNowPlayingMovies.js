import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../components/constants';
export const useNowPlayingMovies=()=>{
    //Fetch data from TMDB api and update the store with that movies data.
  const dispatch=useDispatch();

  const getNowPlayingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);

    const json=await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
}

