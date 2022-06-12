import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from 'store/nodes/slice';
import filtresReducer from 'store/filtres/slice';

const store = configureStore({
  reducer: {
    nodes: nodesReducer,
    filtres: filtresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
