import { Box, Button, TextField } from "@mui/material";

function GetUserEmail() {
  return (
    <Box>
      <TextField
        variant="outlined"
        label="ایمیل"
        sx={{ backgroundColor: "secondary.main" }}
      ></TextField>
      <Button variant="contained">ثبت</Button>
    </Box>
  );
}

export default GetUserEmail;
