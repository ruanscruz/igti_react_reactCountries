import { useState, useEffect } from 'react';
import { Countries, Header, Main, Spinner, TextInput } from '../components';
import { allCountries } from '../data/countries';

export default function ReactCountries() {
  const [countryFilter, setCountryFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  //Lidando com os dados da API
  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await allCountries());
    };

    fetchCountries();
  }, []);

  //Funções e eventos do filtro
  const handleCountryFilterChange = countryName => {
    setCountryFilter(countryName);
  };

  const filterNameLowerCase = countryFilter.toLowerCase();

  const filteredCountries =
    filterNameLowerCase.trim().length >= 3
      ? countries.filter(({ nameLowerCase }) =>
          nameLowerCase.includes(filterNameLowerCase)
        )
      : countries;

  //Funções e eventos dos países visitados
  const handleToggleCountryVisited = id => {
    const isVisited = visitedCountries.includes(id);
    let newVisitedCountries = [...visitedCountries];
    if (isVisited) {
      newVisitedCountries = visitedCountries.filter(countryId => {
        return countryId !== id;
      });
    } else {
      newVisitedCountries.push(id);
    }
    setVisitedCountries(newVisitedCountries);
  };

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
          {countries.length === 0 ? (
            <Spinner />
          ) : (
            <Countries
              visitedCountries={visitedCountries}
              onCountryClick={handleToggleCountryVisited}
            >
              {filteredCountries}
            </Countries>
          )}
        </div>
      </Main>
    </>
  );
}
