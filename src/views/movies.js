import React from 'react';

import { MovieProvider } from '../components/movies-context/movieContext';
import Nav from '../components/movies-context/nav.component';
import MovieList from '../components/movies-context/movie-list.component';
import AddMovie from '../components/movies-context/add-movies.component';
import Footer from '../components/footer.component';

function Movies() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
      <Footer />
    </MovieProvider>
  );
}

export default Movies;
