import React, { useContext } from 'react';
import { MovieContext } from './movieContext';

const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div>
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-teal-500">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="leading-none text-2xl font-bold">Mr. Chip's</h1>
        </div>
        <span className="text-2xl">Movie List: {movies.length}</span>
      </header>
    </div>
  );
};

export default Nav;
