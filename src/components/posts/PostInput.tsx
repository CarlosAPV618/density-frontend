import { FormEvent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { createPost, updatePost } from "../../store/slices/postsSlice";

import type { RootState } from "../../store";
import type { ChangeEvent, FC } from "react";

export const PostInput: FC = () => {
  const [form, setForm] = useState({ author: "", content: "" });
  const { currentPost } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.author || !form.content) return;

    if (currentPost) {
      const data = { id: currentPost.id, ...form };

      await axios.put(`${BASE_URL}/posts/${currentPost.id}`, data);
      dispatch(updatePost(data));
    } else {
      await axios.post(`${BASE_URL}/posts`, form);
      dispatch(createPost(form));
    }

    setForm({ author: "", content: "" });
  };

  useEffect(() => {
    if (currentPost)
      setForm({ author: currentPost.author, content: currentPost.content });
  }, [currentPost]);

  return (
    <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
      <div>
        <input
          className="rounded p-3 border-2 w-full border-stone-400"
          placeholder="Email"
          type="email"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
      </div>

      <div>
        <textarea
          className="h-24 rounded w-full p-3 border-2 border-stone-400"
          placeholder="Add a comment..."
          name="content"
          value={form.content}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button className="bg-gray-300 rounded border p-2" type="submit">
          Comment
        </button>
      </div>
    </form>
  );
};
