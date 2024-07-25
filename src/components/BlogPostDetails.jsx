import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts[parseInt(id)];

  if (!post) return <div>Post not found</div>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={post.urlToImage}
          alt={post.title}
        />
        <CardContent>
          <Typography variant="h3" component="h1" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {post.content}
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/">
            Back to Posts
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogPostDetails;
