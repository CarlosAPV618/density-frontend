import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { fetchPosts } from "./store/slices/postsSlice";
import { BASE_URL } from "./constants";

import type { FC } from "react";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const request = async () => {
      const { data } = await axios.get(`${BASE_URL}/posts`);

      dispatch(fetchPosts(data));
      // ivan.fuentes@densitylabs.io
    };

    request();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
