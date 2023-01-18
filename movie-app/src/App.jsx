import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import "./App.css";
import movieData from "./data";
import MovieCard from "./MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = (title) => {
    // const response = await fetch(`${API}&s=${title}`);
    // const data = await response.json();
    const searchList = movieData.movies.filter((movie) =>
      movie.Title.toLocaleLowerCase()
        .toString()
        .includes(title.toLocaleLowerCase())
    );
    console.log(searchList);
    setMovies(searchList);
  };
  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>Regatul Filmelor</h1>
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          placeholder="Cauta film"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <BsSearch
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
          cursor={"pointer"}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.Title} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
