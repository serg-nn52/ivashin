import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from 'store/nodes/slice';

const store = configureStore({
  reducer: {
    nodes: nodesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
