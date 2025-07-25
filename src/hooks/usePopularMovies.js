import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../components/constants';
export const usePopularMovies=()=>{
    //Fetch data from TMDB api and update the store with that movies data.
  const dispatch=useDispatch();

  const getPopularMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
    const json=await data.json();
    dispatch(addPopularMovies(json.results));
  }
  useEffect(()=>{
    getPopularMovies();
  },[]);
}

