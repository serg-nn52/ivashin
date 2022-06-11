import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'network';
import { TNodes } from './types';

export const getNodes = createAsyncThunk(
  `nodes/fetchAll`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/nodes`);
      const nodes = response.data;
      return nodes;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const deleteNodeThunk = createAsyncThunk(
  `nodes/deleteNode`,
  async (id: string, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/nodes/${id}`);
      return id;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const addNodeThunk = createAsyncThunk(
  `nodes/addNode`,
  async (node: TNodes, { rejectWithValue }) => {
    try {
      await axiosInstance.post('/nodes', node);
      return node;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
