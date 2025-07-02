import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import BlogCards from "../components/BlogCards";

function Blog() {
  return (
    <Box p={5}>
      <BlogCards />
      <Outlet />
    </Box>
  );
}

export default Blog;
