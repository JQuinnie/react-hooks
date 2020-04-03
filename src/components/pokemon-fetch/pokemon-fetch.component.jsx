import React, { useState } from 'react';

import Footer from '../footer.component';

function Pokemon({ pokemonToGet }) {
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonToGet}/`)
      .then(res => res.json())
      .then(res => {
        setPokemon(res);
      });
  }, [pokemonToGet]); // get a new pokemon with the pokemonToGet prop changes

  const style = { textTransform: 'capitalize' };

  return (
    <div>
      {pokemon ? (
        <>
          <img src={pokemon.sprites.front_default} alt={'Image of ' + pokemon.name} />
          <p style={style}>Name: {pokemon.name}</p>
          <p style={style}>Type: {pokemon.types.map(x => x.type.name).join(', ')}</p>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

function PokemonFetch() {
  const [inputValue, setInputValue] = useState('');
  const [pokemonToGet, setPokemonToGet] = React.useState('gengar');

  function getPokemon() {
    setPokemonToGet(inputValue.trim().toLowerCase());
    setInputValue('');
  }

  return (
    <div>
      <h1>Gotta Fetch Em All:</h1>
      <input onChange={e => setInputValue(e.target.value)} value={inputValue} type="text" />
      <button onClick={getPokemon}>Get Pokemon</button>
      <Pokemon pokemonToGet={pokemonToGet} />
      <Footer />
    </div>
  );
}

export default PokemonFetch;
