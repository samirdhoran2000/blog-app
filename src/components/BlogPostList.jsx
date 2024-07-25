import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  
  Pagination,
} from "@mui/material";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=Apple&from=2024-06-25&sortBy=popularity&apiKey=ccf366a4cb4e4858853b02be8143c918&page=${currentPage}`
      );
      setPosts(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalResults / 10)); // Assuming 10 posts per page
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Link to={`/post/${index}`} style={{ textDecoration: "none" }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.description}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        style={{ marginTop: "20px", justifyContent: "center", display: "flex" }}
      />
    </Container>
  );
};

export default BlogPostList;
