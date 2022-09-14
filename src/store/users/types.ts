import { AxiosError } from 'axios';

export type TStateTypeUser = {
  loading: boolean;
  uid: string;
  email: string;
  accessToken: string;
  error: AxiosError | null;
};

export type TUser = {
  uid: string;
  email: string;
  accessToken: string;
};
