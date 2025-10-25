import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface BtnProps {
  to: string;
  type: string;
  children?: string;
  onClick?: () => void;
  width?:
    | { xs?: number | string; sm?: number | string; md?: number | string }
    | number
    | string;
}

function Btn({
  to,
  children,
  onClick,
  type,
  width = { xs: 180, sm: 200, md: 210 },
}: BtnProps) {
  return (
    <Button
      onClick={() => onClick?.()}
      component={Link}
      to={to}
      type={type}
      sx={{
        backgroundColor: "primary.main",
        color: "#ffd0df",
        px: 4,
        py: 1,
        borderRadius: 5,
        width: width,
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
