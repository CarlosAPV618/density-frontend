import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../interfaces/posts";

export interface PostsState {
  posts: Post[];
  currentPost: Post | undefined;
}

const initialState: PostsState = {
  posts: [],
  currentPost: undefined,
};

type NewPost = Omit<Post, "id">;

type EditPost = Partial<Post> & {
  id: number;
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    createPost: (state, action: PayloadAction<NewPost>) => {
      const id = Math.max(...state.posts.map((post) => post.id)) + 1;

      state.posts = [...state.posts, { ...action.payload, id }];

      state.currentPost = undefined;
    },
    updatePost: (state, action: PayloadAction<EditPost>) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );

      state.currentPost = undefined;
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setCurrentPost: (state, action: PayloadAction<number>) => {
      state.currentPost = state.posts.find(
        (post) => post.id === action.payload
      );
    },
  },
});

export const {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
  setCurrentPost,
} = postsSlice.actions;
