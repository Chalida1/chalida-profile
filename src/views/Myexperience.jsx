import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Myexperience() {
  return (
    <>
      <Box sx={{ background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)", py: 10, color: "#000" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            {/* Section Title */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ textTransform: "uppercase", color: "#00b0ff", mb: 3 }}
              >
                My Experience
              </Typography>
            </Grid>

            {/* Experience Items */}
            <Grid item xs={12} md={8}>
              {/* Experience 1 */}
              <Box
                sx={{
                  mb: 4,
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "#e0f7ff",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Typography variant="h6" fontWeight="bold">
                      Meditation Course Booking Management System
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#444", mt: 1, lineHeight: 1.8 }}
                    >
                      Developed the back-end system using PHP and MySQL to
                      manage user data and course bookings.
                      <br />
                      Designed flowcharts and user flows to structure the system
                      before development,
                      <br />
                      helping the team understand overall workflows.
                      <br />
                      Implemented login and user role management
                      (admin/superadmin), tested and debugged the system before
                      deployment.
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Typography variant="body2" sx={{ color: "#888" }}>
                      2022-2025
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              {/* Experience 2 */}
              <Box
                sx={{
                  mb: 4,
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "#e0f7ff",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Typography variant="h6" fontWeight="bold">
                      ICDL Competition
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#444", mt: 1, lineHeight: 1.8 }}
                    >
                      Participated in the International Computer Driving License
                      (ICDL) competition
                      <br />
                      to test digital and software skills.
                      <br />
                      Practiced Microsoft Office and related software,
                      <br />
                      enhanced problem-solving skills under time constraints.
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Typography variant="body2" sx={{ color: "#888" }}>
                      2023
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Myexperience;
