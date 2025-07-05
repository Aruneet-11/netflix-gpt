import {useDispatch} from 'react-redux';
import { API_OPTIONS } from '../components/constants';
import { useEffect } from 'react';
import{addTrailerVideo} from '../utils/movieSlice';
export const useMovieTrailer=(movieid)=>{
    const dispatch=useDispatch();
    //fetching the trailer here.
    const getMovieVideos= async()=>{
  const data= await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTIONS);
  const json=await data.json();

  const filterData=json.results.filter(video=>video.type==="Trailer");
  //Handling the case when there is no trailer available.
  const trailer=filterData.length?filterData?.[0]:json.results?.[0];
 
  dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
      getMovieVideos();
    },[])
}