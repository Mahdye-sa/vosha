import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface BtnProps {
  to: string;
  children?: string;
}

function Btn({ to, children }: BtnProps) {
  return (
    <Button
      component={Link}
      to={to}
      sx={{
        backgroundColor: "primary.main",
        color: "#ffd0df",
        px: 4,
        py: 1,
        borderRadius: 5,
        width: { md: 210, sm: 200, xs: 1800 },
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "all 0.4s ease",
        fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
        fontWeight: "bold",

        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          justifyContent: "center",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default Btn;
