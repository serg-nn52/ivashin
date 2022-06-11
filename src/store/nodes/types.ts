import { AxiosError } from 'axios';

export type TStateTypeNodes = {
  loading: boolean;
  nodes: TNodes[];
  error: AxiosError | null;
};

export type TNodes = {
  id: string;
  text: string;
};
