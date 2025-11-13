import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Index() {
  // TODO: UPDATE LATER - Replace with your actual API endpoint
  const API_BASE_URL = "http://localhost:3000/api";

  // State management
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // TODO: UPDATE LATER - Add your authentication/user context here if needed
  // const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // TODO: ADD YOUR API - Initialize API connection or fetch initial data
  useEffect(() => {
    // Example: Fetch initial messages or chat history
    // fetchChatHistory();
    console.log("Component mounted - Ready for API integration");
  }, []);

  // TODO: ADD YOUR API - Fetch chat history from backend
  const fetchChatHistory = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      // const response = await axios.get(`${API_BASE_URL}/chat/history`);
      // setMessages(response.data);
      console.log("Fetch chat history - API call placeholder");
    } catch (err) {
      setError(err.message);
      console.error("Error fetching chat history:", err);
    } finally {
      setLoading(false);
    }
  };

  // TODO: ADD YOUR API - Send message to backend
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) {
      return;
    }

    // Add user message to local state
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setLoading(true);
    setError(null);

    try {
      // TODO: ADD YOUR API - Replace with your actual API call
      // const response = await axios.post(`${API_BASE_URL}/chat/send`, {
      //   message: inputMessage,
      //   userId: user?.id,
      // });
      
      // Placeholder response (remove this when implementing actual API)
      const response = {
        data: {
          reply: "This is a placeholder response. Connect your API here.",
          timestamp: new Date().toLocaleTimeString(),
        },
      };

      // Add bot/API response to messages
      const botMessage = {
        id: Date.now() + 1,
        text: response.data.reply,
        sender: "bot",
        timestamp: response.data.timestamp,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "70vh" }}>
        {/* Header */}
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          💬 kBot Chat Assistant
        </Typography>

        {/* Chat Messages Display */}
        <Paper
          sx={{
            flex: 1,
            overflow: "auto",
            mb: 2,
            p: 2,
            backgroundColor: "#f5f5f5",
          }}
        >
          {messages.length === 0 ? (
            <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
              <Typography color="textSecondary">
                Start a conversation! 👋
              </Typography>
            </Box>
          ) : (
            <List>
              {messages.map((msg, index) => (
                <Box key={msg.id}>
                  <ListItem
                    sx={{
                      justifyContent:
                        msg.sender === "user" ? "flex-end" : "flex-start",
                      mb: 1,
                    }}
                  >
                    <Paper
                      sx={{
                        p: 2,
                        maxWidth: "70%",
                        backgroundColor:
                          msg.sender === "user" ? "#667eea" : "#e0e0e0",
                        color: msg.sender === "user" ? "white" : "black",
                      }}
                    >
                      <Typography variant="body2">{msg.text}</Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          mt: 0.5,
                          opacity: 0.7,
                        }}
                      >
                        {msg.timestamp}
                      </Typography>
                    </Paper>
                  </ListItem>
                  {index < messages.length - 1 && <Divider sx={{ my: 1 }} />}
                </Box>
              ))}
              {loading && (
                <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
                  <CircularProgress size={24} />
                </Box>
              )}
            </List>
          )}
        </Paper>

        {/* Error Message Display */}
        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            ⚠️ {error}
          </Typography>
        )}

        {/* Input Form */}
        <Box
          component="form"
          onSubmit={handleSendMessage}
          sx={{ display: "flex", gap: 1 }}
        >
          <TextField
            fullWidth
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={loading}
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleSendMessage}
            disabled={loading || !inputMessage.trim()}
            sx={{ px: 3 }}
          >
            Send
          </Button>
        </Box>

        {/* TODO: UPDATE LATER - Add additional features below */}
        {/* 
          Features to add:
          - User authentication
          - Chat history persistence
          - File upload support
          - Message editing/deletion
          - Typing indicators
          - Read receipts
          - Emoji support
        */}
      </Box>
    </Container>
  );
}