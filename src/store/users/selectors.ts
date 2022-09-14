import { RootState } from 'store';

export const getIsToken = (store: RootState) => !!store.user.accessToken;
export const getToken = (store: RootState) => store.user.accessToken;
export const getUserEmail = (store: RootState) => store.user.email;
