import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

// provide information to components
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: 10,
      id: 23124,
    },
    {
      name: 'Game of Thrones',
      price: 100,
      id: 25124,
    },
    {
      name: 'Inception',
      price: 10,
      id: 23524,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
