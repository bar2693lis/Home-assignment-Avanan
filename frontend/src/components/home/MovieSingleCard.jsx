import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import CharactersModal from "./CharactersModal";

const MovieSingleCard = ({ movie, index }) => {
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      {/* Display the release date */}
      <h2 className="absolute top-1 right-2 px-4 py-1 mb-5 bg-red-300 rounded-lg text-sm">
        {movie.release_date}
      </h2>
      <div className="mt-8">
        {/* Display the movie index */}
        <h4 className="my-2 text-gray-500 text-sm">{index}</h4>
        <div className="flex justify-start items-center gap-x-2">
          {/* Display the book icon */}
          <PiBookOpenTextLight className="text-red-300 text-2xl flex-shrink-0" />
          {/* Display the movie title */}
          <h2 className="my-1 text-sm">{movie.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          {/* Display the user icon */}
          <BiUserCircle className="text-red-300 text-2xl flex-shrink-0" />
          {/* Display the director label and name */}
          <span className="text-sm text-gray-500">Director:</span>
          <h2 className="my-1">{movie.director}</h2>
        </div>
        <div className="flex justify-between items-center mt-4 px-8">
          {/* Display the characters modal */}
          <CharactersModal characters={movie.characters} />
        </div>
      </div>
    </div>
  );
};

export default MovieSingleCard;
