import axios from 'axios';

const apiCountries = axios.create({
  baseURL: 'https://restcountries.com/v3.1/all',
});

export { apiCountries };
