import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)

    return (
        <div>
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
             <MovieList title="Popular" movies={movies?.popularMovies || []} />
             <MovieList title="Trending" movies={movies?.trendingMovies || []} />
               <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies || []} />
        </div>
    )
}
export default SecondaryContainer;