import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1f1f1f",
        color: "#ffffff",
        py: 3,
        mt: 4,
        borderTop: "1px solid #333",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Left Section - Brand */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              🤖 kBot
            </Typography>
            <Typography variant="caption" sx={{ color: "#aaa" }}>
              Powered by AI
            </Typography>
          </Box>

          {/* Middle Section - Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="#about"
              sx={{
                color: "#aaa",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "#fff" },
              }}
            >
              About
            </Link>
            <Link
              href="#privacy"
              sx={{
                color: "#aaa",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "#fff" },
              }}
            >
              Privacy
            </Link>
            <Link
              href="#terms"
              sx={{
                color: "#aaa",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "#fff" },
              }}
            >
              Terms
            </Link>
            <Link
              href="#contact"
              sx={{
                color: "#aaa",
                textDecoration: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "#fff" },
              }}
            >
              Contact
            </Link>
          </Box>

          {/* Right Section - Copyright */}
          <Typography variant="caption" sx={{ color: "#888" }}>
            © {currentYear} kBot. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}