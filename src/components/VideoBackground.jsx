import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    
useMovieTrailer(movieId);

    return (
        <div className="w-full h-screen overflow-hidden">
            <iframe className="w-full h-full object-cover"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
                title="YouTube video player" 
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
    )
}
export default VideoBackground;