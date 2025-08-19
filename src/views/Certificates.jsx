import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import icdl from "../assets/icdl.jpg";
import itpe from "../assets/itpe.jpg";

const certificates = [
  {
    name: "ICDL Certificate",
    year: "2023",
    description: "International Computer Driving License",
    image: icdl,
  },
  {
    name: "ITPE Certificate",
    year: "2025",
    description: "Information Technology Passport Examination",
    image: itpe,
  },
];

export default function Certificates() {
  return (
    <Box sx={{ background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)", py: 12, px: { xs: 2, md: 10 } }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ textAlign: "center", mb: 8, color: "#00b0ff" }}
      >
        My Certificates
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={10} md={6} key={index}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 4,
                cursor: "pointer",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                },
              }}
            >
              <img
                src={cert.image}
                alt={cert.name}
                style={{
                  width: "100%",
                  height: 350,
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,176,255,0.9) 0%, rgba(0,176,255,0.0) 60%)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  textAlign: "center",
                  px: 3,
                  py: 4,
                  transform: "translateY(100%)",
                  opacity: 0,
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "translateY(0%)",
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {cert.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  {cert.year}
                </Typography>
                <Typography variant="body1">{cert.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
