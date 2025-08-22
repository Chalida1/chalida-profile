import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "@mui/material/Container";
import certificate from "../assets/certificate.jpg";

function Aboutme() {
  return (
    <Box
      sx={{ background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)", py: 10 }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  textTransform: "uppercase",
                  mb: 6,
                  textAlign: "center",
                  background:"linear-gradient(90deg, #00b0ff, #00ffc8, #0066ff)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, color: "#444" }}
              >
                I graduated from Southeast Asia University <br />
                with a Bachelor ofBusiness Administration in Digital Business
                Information Systems
                <br />
                (GPA 3.54, First-Class Honors).
                <br />
                <br />
                I am interested in pursuing a career in Software Development,
                <br />
                especially Web Development in both Frontend and Backend.
                <br />
                During my academic project, I developed a meditation course
                booking system.
                <br />
                I worked on the back-end system for administrators using PHP and
                a MySQL database.
                <br />
                I also designed flowcharts to structure the system before
                development, <br />
                helping the team clearly understand the overall system workflow.
                <br />
                I implemented the login system and user role management
                (admin/superadmin),
                <br />
                and conducted system testing and bug fixing before final
                delivery.
              </Typography>

              <IconButton
                href="https://github.com/Chalida1"
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

          {/* ขวา: ใบรับรอง */}
          <Grid
            item
            xs={12}
            md="auto"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Box
              component="img"
              src={certificate}
              alt="Graduation Certificate"
              sx={{
                maxWidth: 350,
                width: "100%",
                border: "4px solid #00b0ff",
                borderRadius: 2,
                objectFit: "cover",
                mb: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                },
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#00b0ff", textAlign: "right" }}
            >
              Certificate of Graduation
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Aboutme;
