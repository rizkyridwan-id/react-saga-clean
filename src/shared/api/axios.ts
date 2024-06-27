import axios from 'axios';

export const axiosCountries = axios.create({
  baseURL: 'https://countriesnow.space/api/v0.1',
  timeout: 15000,
});

export const axiosMockapi = axios.create({
  baseURL: 'https://667cd8e53c30891b865de6e0.mockapi.io/api',
  timeout: 15000,
});
