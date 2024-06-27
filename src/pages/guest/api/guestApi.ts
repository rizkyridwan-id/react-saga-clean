import { axiosMockapi } from '@/shared/api';
import { CreateGuestDto, Guest } from '..';

const baseTarget = 'guest';

export async function getGuest() {
  try {
    const response = await axiosMockapi.get<Guest[]>(baseTarget);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function getGuestById(id: string) {
  try {
    const target = baseTarget + `/${id}`;
    const response = await axiosMockapi.get<Guest | string>(target);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function deleteGuest(id: string) {
  try {
    const target = baseTarget + `/${id}`;
    const response = await axiosMockapi.delete<Guest>(target);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function createGuest(guest: CreateGuestDto) {
  try {
    const response = await axiosMockapi.post<Guest>(baseTarget, guest);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function updateGuest(id: string, guest: CreateGuestDto) {
  try {
    const target = baseTarget + `/${id}`;
    const response = await axiosMockapi.put<Guest>(target, guest);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
