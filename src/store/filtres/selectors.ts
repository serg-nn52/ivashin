import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const getFilter = (store: RootState) => store.filtres.filtres;
export const getAllNodesSelector = (store: RootState) => store.nodes.nodes;

export const selectNodesByFilter = createSelector(
  [getAllNodesSelector, getFilter],
  (allNodes, filtres) => {
    return allNodes.filter((el) => {
      let result = true;
      for (let i = 0; i < filtres.length; i += 1) {
        result = result && el.text.includes(filtres[i]);
      }
      return result;
    });
  },
);
