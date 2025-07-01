import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import tiw2 from "../assets/tiw2.jpg";
import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Aboutme() {
  return (
    <Box sx={{ backgroundColor: "#f0f9ff", py: 8 }}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={4}
          
          alignItems="flex-start"
        >
          {/* ฝั่งซ้าย: ข้อความ */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight="bold"
              justifyContent="space-between"
              sx={{ mb: 3, textTransform: "uppercase" }}
            >
              About Me
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              ดิฉันเป็นผู้เริ่มต้นเส้นทางด้านการพัฒนาเว็บไซต์ โดยมีความสนใจเฉพาะทางด้าน Front-End <br />
              และกำลังมองหาโอกาสในการทำงานที่ท้าทายและน่าตื่นเต้น
              <br /><br />
              ให้ความสำคัญกับเรื่องการเข้าถึง (Accessibility) เมื่อพัฒนาเว็บไซต์
              และมีความกระตือรือร้นในการเรียนรู้สิ่งใหม่ ๆ
              รวมถึงการแก้ปัญหาที่เกิดขึ้นระหว่างการเขียนโปรแกรม
              ปัจจุบันกำลังศึกษา React.js และเริ่มเรียนรู้การออกแบบเว็บไซต์เบื้องต้น
              พร้อมทั้งพัฒนาทักษะเพิ่มเติมอย่างต่อเนื่องอย่างสม่ำเสมอ
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "#d5fd35",
                  color: "#000",
                  borderRadius: "30px",
                  px: 3,
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#b9e529" },
                }}
              >
                Download Resume
              </Button>

              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ backgroundColor: "#111", color: "#d5fd35" }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://github.com"
                target="_blank"
                sx={{ backgroundColor: "#111", color: "#d5fd35" }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* ฝั่งขวา: รูป */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "4px solid #00b0ff",
                borderRadius: 2,
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Box
                component="img"
                src={tiw2}
                alt="Profile"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Aboutme;
