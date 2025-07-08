import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faPlay} />

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="flex gap-2 my-4 md:m-0">
            <button className="bg-white text-black py-1 md:py-4 px-2 md:px-16 rounded-lg text-xl hover:bg-opacity-70"><FontAwesomeIcon icon={faPlay} /> Play</button>
            <button className="hidden md:inline-block bg-gray-500 text-white py-4 px-16 rounded-lg text-xl bg-opacity-50
             hover:bg-opacity-90"><FontAwesomeIcon icon={faInfoCircle} /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;