import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import MoviesGrid from "../components/MoviesGrid";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch movies from the backend API
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/movies`);
        if (response.status !== 200) {
          console.log("Failed to fetch movies");
          return;
        }
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4"></div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Movies List</h1>
      </div>
      {loading ? <Spinner /> : <MoviesGrid movies={movies} />}
    </div>
  );
};

export default Home;
