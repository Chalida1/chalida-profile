import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "PHP",
  "FLUTTER",
  "DART",
  "REACT",
  "DATABASE",
];

function Mycapabilities() {
  return (
    <Box sx={{ backgroundColor: "#f0f9ff", py: 10, color: "#000" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start">
 
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ textTransform: "uppercase" }}
            >
              My Capabilities
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>

            <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
              ดิชั้นมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งฝั่ง Frontend,
              Backend, UX/UI และฐานข้อมูล
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {skills.map((skill, i) => (
                <Chip
                  key={i}
                  label={skill}
                  variant="outlined"
                  sx={{
                    color: "#444",
                    borderColor: "#777",
                    borderRadius: "30px",
                    px: 2,
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#e0f7fa" },
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Mycapabilities;
