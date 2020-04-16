import React, { useContext } from 'react';
import {MovieContext} from './movieContext';
import Movie from './movie.component';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const handleDelete = (id) => {
    const moviesFiltered = movies.filter(movie => movie.id !== id );
    setMovies([...moviesFiltered]);
  }

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} id={movie.id} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default MovieList;
