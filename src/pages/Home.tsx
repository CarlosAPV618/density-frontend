import { PostInput, PostsContainer } from "../components/posts";

import type { FC } from "react";

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-stone-100 p-4">
      <div className="bg-white min-h-[35rem] border-2 py-10 px-5">
        <h2 className="font-semibold text-2xl">Leave comments</h2>

        <PostInput />

        <PostsContainer />
      </div>
    </div>
  );
};

export default Home;
