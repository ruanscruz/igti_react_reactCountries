import { useState, useEffect } from 'react';

import { Countries, Header, Main, Spinner, TextInput } from '../components';
import { allCountries } from '../data/countries';
import { getNewId } from '../services';

export default function ReactCountries() {
  const [countryFilter, setCountryFilter] = useState('Argentina');
  const [countries, setCountries] = useState([]);

  const handleCountryFilterChange = countryName => {
    setCountryFilter(countryName);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await allCountries());
    };

    fetchCountries();
  }, []);

  const filterNameLowerCase = countryFilter.toLowerCase();

  const filteredCountries =
    filterNameLowerCase.length >= 3
      ? countries.filter(({ nameLowerCase }) =>
          nameLowerCase.includes(filterNameLowerCase)
        )
      : countries;

  return (
    <>
      <Header>React-Countries</Header>
      <Main>
        <TextInput
          id="searchCountries"
          labelDescription="Informe o nome do país (pelo menos 3 caracteres):"
          onInputChange={handleCountryFilterChange}
          inputValue={countryFilter}
          autoFocus
        />
        <div className="">
          {filteredCountries.map(
            ({ id, name, flag, capital, region, population, area }) => (
              <Countries
                key={id}
                name={name}
                flag={flag}
                capital={capital}
                region={region}
                population={population}
                area={area}
              />
            )
          )}
        </div>
      </Main>
    </>
  );
}
