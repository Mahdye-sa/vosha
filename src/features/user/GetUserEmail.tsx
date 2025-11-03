import { Box } from "@mui/material";
import { useState } from "react";

function GetUserEmail() {
  const [email, setEmail] = useState("");

  function handleClick() {
    if (email.length <= 0) return;
    //insert in userEmail table (email)
    console.log(email);
    setEmail("");
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <input
        style={{
          border: "1px",
          borderRadius: 15,
          height: "2rem",
          width: "10rem",
          padding: "1rem",
          backgroundColor: "#f8bbd0",
        }}
        placeholder="ایمیل"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        role="button"
        style={{
          border: "1px",
          borderRadius: 15,
          height: "2rem",
          width: "4rem",
          color: "#333333",
          backgroundColor: "#f8bbd0",
        }}
        onClick={handleClick}
      >
        ثبت
      </button>
    </Box>
  );
}

export default GetUserEmail;
