import React, { useState, useContext } from 'react';
import { MovieContext } from './movieContext';

const AddMovie = () => {
  let randNum = Math.floor(Math.random() * Math.floor(100000));

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
    setId(randNum);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();

    // has access to the latest rendered movies
    setMovies((prevMovies) => [...prevMovies, { name, price, id }]);
  };

  return (
    <div>
      <h1 className="text-4xl text-center">Movies via Context API</h1>

      <form onSubmit={addMovie}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3">
            <label className="lock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Movie Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded"
              type="text"
              name="name"
              value={name}
              onChange={updateName}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="lock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Movie Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded"
              type="text"
              name="price"
              value={price}
              onChange={updatePrice}
            />
          </div>
        </div>
        <div className="px-3">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
