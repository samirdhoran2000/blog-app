import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPostList from "./components/BlogPostList";
import BlogPostDetails from "./components/BlogPostDetails";
import axios from "axios";
import { CssBaseline } from "@mui/material";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=Apple&from=2024-06-25&sortBy=popularity&apiKey=ccf366a4cb4e4858853b02be8143c918"
      );
      setPosts(response.data.articles);
    };

    fetchPosts();
  }, []);

  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;
