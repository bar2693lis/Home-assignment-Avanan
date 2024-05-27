import React from "react";
import MovieSingleCard from "./home/MovieSingleCard";

// MoviesGrid component that takes in an array of movies as a prop
const MoviesGrid = ({ movies }) => {
  // If movies prop is not provided, return null
  if (!movies) {
    return null;
  }

  // Render a grid with different number of columns based on screen size
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Map through the movies array and render a MovieSingleCard component for each movie */}
      {movies.map((movie, index) => (
        <MovieSingleCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;
