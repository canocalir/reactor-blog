import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: true,
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { addPost, setLoading } = postsSlice.actions;
export const selectPost = (state) => state.posts.posts
export const selectLoading = (state) => state.posts.loading
export default postsSlice.reducer;
