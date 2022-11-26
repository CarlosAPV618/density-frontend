import { useContext, useEffect, useReducer } from "react";
import { PostsInitialState, PostsContext, postsReducer } from "./";
import { Post } from "../../interfaces/posts";
import axios from "axios";

import type { FC, ReactNode } from "react";
import { BASE_URL } from "../../constants";

export interface PostsState {
  posts: Post[];
}

interface Props {
  children: ReactNode;
}

export const PostsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, PostsInitialState);

  useEffect(() => {
    const request = async () => {
      const { data } = await axios.get(`${BASE_URL}/posts`);

      dispatch({ type: "Set Posts", payload: data });
      // ivan.fuentes@densitylabs.io
      console.log("sdf", data);
    };

    request();
  }, []);

  return (
    <PostsContext.Provider value={{ ...state }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => useContext(PostsContext);
