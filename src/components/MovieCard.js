import React from 'react'
import {IMG_CDN_URL} from './constants'
const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-36 md:w-52 pr-4 flex-shrink-0">
      <img alt="Movie Card" src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard