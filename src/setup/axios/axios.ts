import axios from 'axios';

export const axiosCountries = axios.create({
  baseURL: 'https://countriesnow.space/api/v0.1',
  timeout: 15000,
});

export const axiosMockapi = axios.create({
  baseURL: 'https://6666b882a2f8516ff7a49104.mockapi.io/api',
  timeout: 15000,
});
