import { Post } from "../../interfaces/posts";
import { PostsState } from "./";

type PostsActionType = { type: "Set Posts"; payload: Post[] };

export const PostsInitialState: PostsState = {
  posts: [],
};

export const postsReducer = (
  state: PostsState,
  action: PostsActionType
): PostsState => {
  switch (action.type) {
    case "Set Posts":
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
