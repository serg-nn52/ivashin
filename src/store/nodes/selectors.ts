import { RootState } from 'store';

export const getIsLoading = (store: RootState) => store.nodes.loading;
export const getAllNodesSelector = (store: RootState) => store.nodes.nodes;
