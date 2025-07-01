import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";

function Contact() {
  return (
    <>
      <Box sx={{ backgroundColor: "#f0f9ff", py: 10, color: "#000" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
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
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                LET’S CONNECT
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Say hello at{" "}
                <Link
                  href="mailto:s6535410028@sau.ac.th"
                  underline="hover"
                  sx={{ color: "#c6f62d" }}
                >
                  s6535410028@sau.ac.th
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                For more info, here’s my{" "}
                <Link href="#" underline="hover" sx={{ color: "#c6f62d" }}>
                  resume
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
                  href="https://linkedin.com"
                  sx={{ color: "#c6f62d" }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com" sx={{ color: "#c6f62d" }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton sx={{ color: "#c6f62d" }}>
                  <XIcon />
                </IconButton>
                <IconButton sx={{ color: "#c6f62d" }}>
                  <InstagramIcon />
                </IconButton>
              </Box>

              <Typography variant="caption" sx={{ color: "#aaa" }}>
                © 2025 Chalida Manapai
              </Typography>
            </Grid>

            {/* Right Section (Form) */}
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                justifyContent: "flex-end", // ให้ Form ชิดขวา
              }}
            >
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="filled"
                        InputProps={{
                          style: {
                            backgroundColor: "#f0f9ff", // สีพื้นหลังเท่ากับหน้าหลัก
                            color: "#ccc", // สีตัวอักษร
                          },
                        }}
                        InputLabelProps={{
                          style: { color: "#ccc" }, // สี Label (เช่น "Name")
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="filled"
                        InputProps={{
                          style: { backgroundColor: "#f0f9ff", color: "#ccc" },
                        }}
                        InputLabelProps={{
                          style: { color: "#ccc" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="filled"
                        InputProps={{
                          style: { backgroundColor: "#f0f9ff", color: "#ccc" },
                        }}
                        InputLabelProps={{
                          style: { color: "#ccc" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        variant="filled"
                        InputProps={{
                          style: { backgroundColor: "#f0f9ff", color: "#ccc" },
                        }}
                        InputLabelProps={{
                          style: { color: "#ccc" },
                        }}
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
                      fontWeight: "bold",
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
    </>
  );
}

export default Contact;
