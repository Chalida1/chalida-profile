import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const skills = [
  "PHP",
  "JavaScript",
  "Node.js",
  "RESTful APIs",
  "React.js",
  "Tailwind CSS",
  "HTML",
  "Front End",
  "Back End",
  "MySQL",
  "Database",
  "Tools & Platforms",
  "Git",
  "Figma",
  "Flutter",
];

export default function Mycapabilities() {
  return (
    <Box sx={{ background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)", py: 12, color: "#000" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ textTransform: "uppercase", mb: 3, background: "linear-gradient(90deg, #00b0ff, #00ffc8)", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              My Capabilities
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="body1" sx={{ mb: 4, color: "#555", fontSize: "1.1rem" }}>
              I’m always seeking opportunities to learn new skills across Frontend, Backend, UX/UI, and Databases. Below are some of my capabilities:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {skills.map((skill, i) => (
                <Chip
                  key={i}
                  label={skill}
                  variant="outlined"
                  sx={{
                    color: "#444",
                    borderColor: "#00b0ff",
                    borderRadius: "50px",
                    px: 3,
                    py: 1,
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease, transform 0.5s ease",
                    background: "linear-gradient(145deg, #ffffff, #e0f7fa)",
                    "&:hover": {
                      background: "linear-gradient(145deg, #00b0ff, #00ffc8)",
                      color: "#fff",
                      transform: "scale(1.15) rotate(-3deg)",
                      boxShadow: "0 8px 25px rgba(0,176,255,0.4)",
                    },
                    animation: `fadeInUp 0.5s ease forwards`,
                    animationDelay: `${i * 0.05}s`,
                    opacity: 0,
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}
