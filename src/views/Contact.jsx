import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)",
        py: 10,
        color: "#000",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {/* Left Section */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mb: 2,
                background: "linear-gradient(90deg, #00b0ff, #00ffc8, #0066ff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Let’s Connect
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Say hello at{" "}
              <Link
                href="mailto:chalidamnp@gmail.com"
                underline="hover"
                sx={{ color: "#c6f62d", fontWeight: "bold" }}
              >
                chalidamnp@gmail.com
              </Link>
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              For more info, here’s my{" "}
              <Link
                href="/chalida-profile/Resume_chalidamanapai.pdf"
                underline="hover"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#c6f62d" }}
              >
                Resume
              </Link>
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                mb: 5,
              }}
            >
              <IconButton
                href="https://github.com/Chalida1"
                target="_blank"
                sx={{
                  color: "#000",
                  backgroundColor: "#fff",
                  "&:hover": { backgroundColor: "#ddd" },
                }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                href="mailto:chalidamnp@gmail.com"
                sx={{
                  color: "#d93025",
                  backgroundColor: "#fff",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>

            <Typography variant="caption" sx={{ color: "#555" }}>
              © 2025 Chalida Manapai
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 600,
                p: 4,
                borderRadius: "20px",
                background: "#fff",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            >
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Email" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Subject" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#d5fd35",
                    color: "#000",
                    borderRadius: "30px",
                    px: 5,
                    py: 1.2,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#b9e529" },
                  }}
                >
                  SUBMIT
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
