import axios from "axios";
import { useDispatch } from "react-redux";
import { Post } from "../../interfaces/posts";
import { deletePost, setCurrentPost } from "../../store/slices/postsSlice";

import type { FC } from "react";
import { BASE_URL } from "../../constants";

interface Props {
  post: Post;
}

export const PostCard: FC<Props> = ({ post }) => {
  const dispatch = useDispatch();

  const handleEdit = (id: number) => {
    dispatch(setCurrentPost(id));
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`${BASE_URL}/posts/${id}`);
    dispatch(deletePost(id));
  };

  return (
    <div className="p-2 space-y-3 mb-2">
      <h4 className="font-semibold">{post.author}</h4>
      <p>{post.content}</p>

      <div className="space-x-3">
        <button
          onClick={() => handleEdit(post.id)}
          className="bg-gray-300 p-2 rounded border"
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(post.id)}
          className="bg-gray-300 p-2 rounded border"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
