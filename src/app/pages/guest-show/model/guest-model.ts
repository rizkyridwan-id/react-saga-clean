export interface Guest {
  id: string;
  name: string;
  email: string;
  gender: string;
  state: string;
  city: string;
  createdAt: string;
}

const initGuest: Omit<Guest, 'createdAt' | 'id'> = {
  name: '',
  email: '',
  gender: '',
  state: '',
  city: '',
};
