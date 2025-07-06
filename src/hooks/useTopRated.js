import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRated} from '../utils/movieSlice';
import { API_OPTIONS } from '../components/constants';
export const useTopRated=()=>{
    //Fetch data from TMDB api and update the store with that movies data.
  const dispatch=useDispatch();

  const getTopRated=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
    const json=await data.json();
    dispatch(addTopRated(json.results));
  }
  useEffect(()=>{
    getTopRated();
  },[]);
}

