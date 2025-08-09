import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/apiClient';

// Async thunk to send data to backend
export const addPersonalInfo  = createAsyncThunk(
  'userProfile/addpersonalinfo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/user/personalinfo',data);
      const responseData = await response.json();

      if (!response.ok) {
        return rejectWithValue(responseData.message || 'Failed to send data');
      }

      return responseData.data; 
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    userData: {},
    loading: false,
    error: null
  },
  reducers: {
    setPersonalInfo: (state, action) => {
      state.userData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPersonalInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPersonalInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(addPersonalInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setPersonalInfo } = userProfileSlice.actions;
export default userProfileSlice.reducer;
