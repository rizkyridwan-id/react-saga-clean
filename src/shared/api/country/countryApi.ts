import { axiosCountries } from '../axios';
import { GetStateResponseDto } from './countryDto';

const baseTarget = 'countries';

export async function getState() {
  try {
    const target = `${baseTarget}/states`;
    const response = await axiosCountries.post<GetStateResponseDto[]>(target, {
      country: 'Indonesia',
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || error.message);
  }
}

export async function getCities(state: string) {
  try {
    const target = `${baseTarget}/state/cities`;
    const response = await axiosCountries.post<string[]>(target, {
      country: 'Indonesia',
      state,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.msg || error.msg);
  }
}
