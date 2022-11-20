import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: true,
  posts: [],
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    reset: () => initialState
  },
});

export const { addPost, setLoading, reset } = postsSlice.actions;
export const selectPost = (state) => state.posts.posts
export const selectLoading = (state) => state.posts.loading
export default postsSlice.reducer;
