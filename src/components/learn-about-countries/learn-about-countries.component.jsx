import React, { useState, useEffect } from 'react';

import Footer from '../footer.component';

const CountryCard = ({ country: { name, capital, flag, population, region } }) => {
  return (
    <div className="w-64 shadow-2 m-5 bg-white">
      <img className="w-64 h-48 object-cover" src={flag} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capitol:</strong> {capital}
        </p>
      </div>
    </div>
  );
};

const LearnAboutCountries = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sortByPop, setSortByPop] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onChangeCheckbox = () => {
    setSortByPop(!sortByPop);
  };

  const sortPopulation = (a, b) => {
    if (sortByPop) {
      return b.population - a.population;
    }
    return 0;
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div>
      <h1 className="text-4xl text-center">Countries List</h1>
      <div className="flex items-center justify-center">
        <input
          className="border-2 p-3 w-1/2"
          type="text"
          placeholder="Search for Country"
          value={inputValue}
          onChange={onChangeInput}
        />
        <div>
          <label className='m-2' htmlFor="population">Sort by Population</label>
          <input type="checkbox" checked={sortByPop} onChange={onChangeCheckbox} id="population" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredCountries.length < 1 ? (
          <p classsName="text-xl p-3">
            {inputValue === '' ? 'Loading...' : 'No countries exist for this search'}
          </p>
        ) : (
          filteredCountries
            .sort(sortPopulation)
            .map((country) => <CountryCard key={country.alpha3Code} country={country} />)
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LearnAboutCountries;
