import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/postsSlice';
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer
  },
});
