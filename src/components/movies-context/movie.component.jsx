import React from 'react';

const Movie = ({ name, price, id, onDelete }) => {
  return (
    <div className="flex justify-between p-4">
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
      <div>
        <button
          className='bg-red-500 hover:bg-orange-100 text-red-800 font-semibold py-2 px-4 border border-red-400 rounded shadow'
          onClick={() => onDelete(id)}>Delete Movie</button>
      </div>
    </div>
  );
};

export default Movie;
