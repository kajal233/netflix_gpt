import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {

    if (!movies || movies.length === 0) return null;

    return (
        <div className=" px-6  bg-black ">
            <h2 className="text-2xl font-semibold text-white mb-3">
                {title}
            </h2>

            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            posterPath={movie.poster_path}
                            title={movie.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
