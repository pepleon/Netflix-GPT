import {useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";


const VideoBackground = ({movieID}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    
 useMovieTrailer(movieID);
  return (
    <div className="max-w-full ">
        <iframe  className="w-screen aspect-video max-w-full"
       
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
    </div>
  )
  
}

export default VideoBackground;