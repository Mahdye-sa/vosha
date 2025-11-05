import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import Face2Icon from "@mui/icons-material/Face2";
import SendIcon from "@mui/icons-material/Send";
import { sendMessageToBot } from "./apiChatbot";

function ChatBot() {
  const [openChat, setOpenChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "سلام! چطور می‌تونم کمکت کنم؟" },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleClick() {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "... در حال نوشتن پاسخ  " },
    ]);

    const botReply = await sendMessageToBot(userMessage);

    setMessages((prev) => {
      const newMessages = [...prev];
      newMessages.pop();
      return [...newMessages, { sender: "bot", text: botReply }];
    });
  }

  return (
    <>
      <Box
        position="fixed"
        bottom={20}
        right={20}
        zIndex={1000}
        onClick={() => setOpenChat((prev) => !prev)}
        sx={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: "primary.main",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 3,
          cursor: "pointer",
          transition: "all 0.4s ease",
          "&:hover": { bgcolor: "primary.dark", transform: "scale(1.05)" },
        }}
      >
        {openChat ? <CloseIcon /> : <MessageIcon fontSize="medium" />}
      </Box>

      {openChat && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setOpenChat(false)}
        >
          <Paper
            onClick={(e) => e.stopPropagation()}
            sx={{
              backgroundImage:
                'url("/vecteezy_spring-seamless-pattern-with-cute-sakura-flowers-perfect_.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: { xs: "85%", sm: "75%", md: "35%" },
              height: { xs: "65%", sm: "70%" },
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "right",
                p: 1,
                bgcolor: "primary.main",
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              <Typography variant="body2" color="success.light">
                (آنلاین)
              </Typography>
              <Typography variant="h6" color="white">
                دستیار سایت
              </Typography>

              <Avatar
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  color: "white",
                  bgcolor: "primary.dark",
                }}
              >
                <Face2Icon />
              </Avatar>
            </Box>

            <Box
              sx={{
                overflowY: "auto",
                flex: 1,
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {messages.map((msg, i) => (
                <Box
                  key={i}
                  sx={{
                    alignSelf:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                    bgcolor: msg.sender === "user" ? "primary.main" : "#fff0f6",
                    color: msg.sender === "user" ? "white" : "text.primary",
                    px: 2,
                    py: 1,
                    borderRadius: 3,
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  <Typography variant="body2" textAlign="right">
                    {msg.text}
                  </Typography>
                </Box>
              ))}
              <div ref={messagesEndRef} />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1.5,
                bgcolor: "primary.main",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            >
              <TextField
                placeholder=" ... پیام خودتون رو بنویسید"
                variant="outlined"
                size="small"
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleClick()}
                sx={{
                  bgcolor: "white",
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />

              <IconButton
                color="primary"
                sx={{
                  bgcolor: "primary.dark",
                  color: "white",
                  "&:hover": { bgcolor: "primary.main" },
                  width: 40,
                  height: 40,
                }}
                onClick={handleClick}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}

export default ChatBot;
