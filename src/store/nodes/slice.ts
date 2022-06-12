import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNodeThunk, deleteNodeThunk, getNodes, putNodeThunk } from './thunk';
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
      state.error = null;
    },
    [deleteNodeThunk.fulfilled.type]: (
      state: TStateTypeNodes,
      action: PayloadAction<string>,
    ) => {
      state.nodes = state.nodes.filter((el) => el.id !== action.payload);
    },
    [deleteNodeThunk.rejected.type]: (state: TStateTypeNodes) => {
      state.error = null;
    },
    [addNodeThunk.pending.type]: (state: TStateTypeNodes) => {
      state.error = null;
    },
    [addNodeThunk.fulfilled.type]: (
      state: TStateTypeNodes,
      action: PayloadAction<TNodes>,
    ) => {
      state.nodes.push(action.payload);
    },
    [addNodeThunk.rejected.type]: (state: TStateTypeNodes) => {
      state.error = null;
    },
    [putNodeThunk.pending.type]: (state: TStateTypeNodes) => {
      state.error = null;
    },
    [putNodeThunk.fulfilled.type]: (
      state: TStateTypeNodes,
      action: PayloadAction<TNodes>,
    ) => {
      state.nodes.find((el) => el.id === action.payload.id)!.text =
        action.payload.text;
    },
    [putNodeThunk.rejected.type]: (state: TStateTypeNodes) => {
      state.error = null;
    },
  },
});

export default nodesSlice.reducer;
