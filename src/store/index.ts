import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from 'store/nodes/slice';
import filtresReducer from 'store/filtres/slice';
import userReduser from 'store/users/slice';

const store = configureStore({
  reducer: {
    nodes: nodesReducer,
    filtres: filtresReducer,
    user: userReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
