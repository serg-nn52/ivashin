import { RootState } from 'store';

export const getIsLoading = (store: RootState) => store.nodes.loading;
export const getAllNodesSelector = (store: RootState) => store.nodes.nodes;
export const getValue = (id: string) => (store: RootState) =>
  store.nodes.nodes.filter((el) => el.id === id)[0].text;
