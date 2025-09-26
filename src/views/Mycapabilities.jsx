import React from "react";
import { Box, Typography, Grid, Container, Paper, Chip } from "@mui/material";

const skillGroups = {
  Frontend: [
    { name: "HTML", level: "Intermediate" },
    { name: "JavaScript", level: "Beginner" },
    { name: "React.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
  ],
  Backend: [
    { name: "PHP", level: "Intermediate" },
    // { name: "Node.js", level: "Beginner" },
    // { name: "RESTful APIs", level: "Beginner" },
    { name: "MySQL", level: "Intermediate" },
  ],
  "Tools & Platforms": [
    { name: "Git", level: "Intermediate" },
    { name: "Figma", level: "Beginner" },
  ],
  "Mobile & Others": [{ name: "Flutter", level: "Beginner" }],
  "Office Tools": [
    { name: "Microsoft Word", level: "Intermediate" },
    { name: "Microsoft Excel", level: "Intermediate" },
    { name: "Canva", level: "Intermediate" },
  ],
};

// สีตามระดับ
const levelColors = {
  Beginner: { borderColor: "#fbc02d", color: "#f57f17" }, // เหลือง
  Intermediate: { borderColor: "#4caf50", color: "#1b5e20" }, // เขียว
  Advanced: { borderColor: "#2196f3", color: "#0d47a1" }, // น้ำเงิน
};

export default function Mycapabilities() {
  return (
    <Box sx={{ background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)", py: 12 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            textTransform: "uppercase",
            mb: 6,
            textAlign: "center",
            background: "linear-gradient(90deg, #00b0ff, #00ffc8, #0066ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          My Skills
        </Typography>

        {/* Skill Groups */}
        <Grid container spacing={4}>
          {Object.entries(skillGroups).map(([category, skills], idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  background: "linear-gradient(145deg, #ffffff, #e0f7fa)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0,176,255,0.3)",
                  },
                }}
              >
                {/* Category */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: "bold",
                    color: "#00b0ff",
                  }}
                >
                  {category}
                </Typography>

                {/* Skill list */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {skills.map((skill, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: 1.5,
                        borderRadius: "12px",
                        background: "rgba(0,176,255,0.05)",
                        transition: "0.3s",
                        "&:hover": {
                          background: "rgba(0,176,255,0.15)",
                          transform: "scale(1.02)",
                        },
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {skill.name}
                      </Typography>
                      <Chip
                        label={skill.level}
                        variant="outlined"
                        sx={{
                          fontWeight: "bold",
                          borderRadius: "20px",
                          px: 2,
                          ...levelColors[skill.level],
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
