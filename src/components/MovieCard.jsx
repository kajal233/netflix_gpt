import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-60 flex-shrink-0 transform transition hover:scale-110 duration-200">
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg object-cover w-full h-80"
      />
    </div>
  );
};

export default MovieCard;
