import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { addNodeThunk, deleteNodeThunk, getNodes, putNodeThunk } from './thunk';
import { TStateTypeUser, TUser } from './types';

const initialState: TStateTypeUser = {
  loading: false,
  uid: '',
  email: '',
  accessToken: '',
  error: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state: TStateTypeUser, action: PayloadAction<TUser>) {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
    },
    logoutUser(state: TStateTypeUser) {
      state.uid = '';
      state.email = '';
      state.accessToken = '';
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
