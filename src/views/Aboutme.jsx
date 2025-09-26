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
                  background:
                    "linear-gradient(90deg, #00b0ff, #00ffc8, #0066ff)",
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
                with a Bachelor of Business Administration in Information
                Systems for Digital Business
                <br />
                (GPA 3.54, First-Class Honors).
                <br />
                <br />
                I hold a bachelor's degree in Digital Business Information
                Systems.
                <br /> I'm a fast learner, adaptable, and detail-oriented.{" "}
                <br />
                I work well with others, possessing excellent coordination and
                teamwork skills,
                <br /> based on my experience as a student club committee
                <br /> member and my participation in numerous volunteer
                projects. <br />I also possess a high sense of responsibility,
                <br /> enjoy helping others, and am always open to learning new
                things.
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
