import { apiCountries, getNewId } from '../services/';

const allCountries = async () => {
  const response = await apiCountries.get('/');
  return arrayCountriesTransformed(response.data);
};

const arrayCountriesTransformed = array => {
  const countries = array.map(country => {
    const { area, capital, flags, name, population, region } = country;
    return {
      area,
      capital,
      flag: flags.svg,
      id: getNewId(),
      name: name.common,
      nameLowerCase: name.common.toLowerCase(),
      population,
      region,
    };
  });

  return countries;
};

export { allCountries };
