import { createTheme } from "@mui/material/styles";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "parzav, Vazir",
  },
  palette: {
    primary: {
      main: "#ec407a",
    },
    secondary: {
      main: "#f8bbd0",
    },
    text: {
      primary: "#333333",
    },
    background: {
      default: "#fff0f6",
    },
  },
});

export default theme;
