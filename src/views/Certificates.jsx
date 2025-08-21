import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import icdl from "../assets/icdl.jpg";
import itpe from "../assets/itpe.jpg";

const certificates = [
  {
    name: "ICDL Certificate",
    description: "Application Essentials (MS Office 2016/1.0)",
    year: "2023",
    image: icdl,
  },
  {
    name: "IT Passport Examination (ITPE)",
    description: "Fundamental IT knowledge & business skills certification",
    year: "2025",
    image: itpe,
  },
];

export default function Certificates() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)",
        py: 12,
        px: { xs: 2, md: 10 },
      }}
    >
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
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 4,
                cursor: "pointer",
                "&:hover .overlay": { opacity: 1, transform: "translateY(0%)" },
                "&:hover img": { filter: "blur(4px) brightness(0.6)" },
              }}
            >
          
              <Box
                component="img"
                src={cert.image}
                alt={cert.name}
                sx={{
                  width: "100%",
                  height: 350,
                  objectFit: "cover",
                  transition: "filter 0.4s ease",
                }}
              />

              {/* Overlay: ข้อความ */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                  px: 2, // ลด padding
                  opacity: 0,
                  transform: "translateY(100%)",
                  transition: "all 0.4s ease",
                  background: "rgba(0,0,0,0.4)",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ maxWidth: "90%", wordBreak: "break-word" }}
                >
                  {cert.name}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ maxWidth: "90%", wordBreak: "break-word" }}
                >
                  {cert.description}
                </Typography>
                <Typography variant="subtitle2">
                  {cert.year}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
