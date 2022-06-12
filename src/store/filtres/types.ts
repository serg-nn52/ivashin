import { AxiosError } from 'axios';

export type TStateTypeFiltres = {
  loading: boolean;
  filtres: string[];
  error: AxiosError | null;
};
