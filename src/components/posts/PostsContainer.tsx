import { useSelector } from "react-redux";
import { PostCard } from "./PostCard";

import type { FC } from "react";
import type { RootState } from "../../store";

export const PostsContainer: FC = () => {
  const { posts } = useSelector((state: RootState) => state.posts);

  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};
