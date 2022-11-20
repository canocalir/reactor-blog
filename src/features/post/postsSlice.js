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

export const { addPost, setLoading, clearPost } = postsSlice.actions;
export const selectPost = (state) => state.posts.posts
console.log(selectPost)
export default postsSlice.reducer;
