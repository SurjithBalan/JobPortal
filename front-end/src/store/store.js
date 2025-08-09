import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import userProfileReducer from './features/userProfileSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
