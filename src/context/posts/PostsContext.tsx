import { createContext } from "react";
import { Post } from "../../interfaces/posts";

interface ContextProps {
  posts: Post[];
}

export const PostsContext = createContext({} as ContextProps);
