import { Box, Tabs, Tab, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

function Login() {
  const [mode, setMode] = useState<"login" | "signUp">("login");

  const handleTabChange = (_: unknown, newValue: number) => {
    setMode(newValue === 0 ? "login" : "signUp");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "login") {
      // call login API
    } else {
      // call signup API
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: {
          md: "url('/bg-login1.png')",
          xs: "url('/bg-login2.png')",
        },
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          p: { xs: 3, sm: 5, md: 6 },
          width: { xs: "80%", sm: "50%", md: "35%" },
          borderRadius: 5,
          boxShadow: "0 10px 15px hsl(340, 81.10%, 80%)",
        }}
        dir="rtl"
      >
        <Tabs
          value={mode === "login" ? 0 : 1}
          onChange={handleTabChange}
          centered
        >
          <Tab label="ورود" />
          <Tab label="ثبت‌نام" />
        </Tabs>

        <Box
          component="form"
          mt={1}
          display="flex"
          flexDirection="column"
          gap={2}
          onSubmit={handleSubmit}
          sx={{
            "& .MuiInputLabel-root": {
              right: 0,
              left: "auto",
              transformOrigin: "top right",
            },
          }}
        >
          <TextField label="نام  کاربری" type="text" variant="standard" />
          <TextField label="رمز عبور" type="password" variant="standard" />

          {mode === "signUp" && (
            <TextField
              label="تأیید رمز عبور"
              type="password"
              variant="standard"
            />
          )}
          <Button
            variant="contained"
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              borderRadius: 3,
              mt: 1,
            }}
          >
            {mode === "login" ? "ورود" : "ثبت‌نام"}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          {mode === "login" ? (
            <Box display="flex" alignItems="center">
              <Typography variant="body2">حساب نداری؟</Typography>
              <Button onClick={() => setMode("signUp")} size="small">
                ثبت‌نام کن
              </Button>
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              <Typography variant="body2">قبلاً ثبت‌نام کردی؟</Typography>
              <Button onClick={() => setMode("login")} size="small">
                وارد شو
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
