import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import tiw from "../assets/tiw.jpg";

function Profile2() {
  return (
    <>
      <Box sx={{ background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)", py: 10 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              color="#00b0ff"
            >
              HI, I AM <br /> CHALIDA M.
            </Typography>
            <Typography variant="body1" sx={{ color: "#444", mb: 3 }}>
              Frontend Developer from Thailand <br />
              Passionate about creating modern and user-friendly websites.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00b0ff",
                  borderRadius: "25px",
                  px: 4,
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#0081b3" },
                }}
              >
                CONTACT ME
              </Button>
              
              <IconButton
                href="https://github.com"
                target="_blank"
                sx={{
                  backgroundColor: "#222",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#444" },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={tiw}
              alt="Profile"
              sx={{
                width: 300,
                borderRadius: "50%",
                border: "6px solid #00b0ff",
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Profile2;
