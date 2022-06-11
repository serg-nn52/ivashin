import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNodeThunk, deleteNodeThunk, getNodes } from './thunk';
import { TNodes, TStateTypeNodes } from './types';

const initialState: TStateTypeNodes = {
  loading: false,
  nodes: [],
  error: null,
};
const nodesSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {},
  extraReducers: {
    [getNodes.pending.type]: (state: TStateTypeNodes) => {
      state.loading = true;
      state.error = null;
    },
    [getNodes.fulfilled.type]: (
      state: TStateTypeNodes,
      action: PayloadAction<TNodes[]>,
    ) => {
      state.loading = false;
      state.nodes = action.payload;
    },
    [getNodes.rejected.type]: (state: TStateTypeNodes) => {
      state.loading = false;
      state.error = null;
    },
    [deleteNodeThunk.pending.type]: (state: TStateTypeNodes) => {
      state.loading = true;
      state.error = null;
    },
    [deleteNodeThunk.fulfilled.type]: (
      state: TStateTypeNodes,
      action: PayloadAction<string>,
    ) => {
      state.loading = false;
      state.nodes = state.nodes.filter((el) => el.id !== action.payload);
    },
    [deleteNodeThunk.rejected.type]: (state: TStateTypeNodes) => {
      state.loading = false;
      state.error = null;
    },
    [addNodeThunk.pending.type]: (state: TStateTypeNodes) => {
      state.loading = true;
      state.error = null;
    },
    [addNodeThunk.fulfilled.type]: (
      state: TStateTypeNodes,
      action: PayloadAction<TNodes>,
    ) => {
      state.loading = false;
      state.nodes.push(action.payload);
    },
    [addNodeThunk.rejected.type]: (state: TStateTypeNodes) => {
      state.loading = false;
      state.error = null;
    },
  },
});

// export const { setBrandFilter, setPriceFilter } = productsSlice.actions;
export default nodesSlice.reducer;
