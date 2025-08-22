import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <Box p={5}>
      <Outlet />
    </Box>
  );
}

export default Blog;
