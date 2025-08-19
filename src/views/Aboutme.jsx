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
    <Box sx={{ background: "linear-gradient(135deg, #e0f7fa, #f0f9ff)", py: 10 }}>
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ mb: 3, textTransform: "uppercase", color: "#00b0ff" }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8, color: "#444" }}
            >
              ดิฉันสำเร็จการศึกษาจากสาขาระบบสารสนเทศเพื่อธุรกิจดิจิทัล
              มหาวิทยาลัยเอเชียอาคเนย์ <br />
              มีความสนใจในสายงานพัฒนา Software โดยเฉพาะ Web Development ทั้ง
              Frontend และ Backend
              <br />
              <br />
              จากโครงงานระหว่างเรียนได้พัฒนาระบบจองคอร์สปฏิบัติธรรม (Back-End)
              ด้วย PHP และ MySQL พร้อมออกแบบ Flowchart และระบบกำหนดสิทธิ์ผู้ใช้
              ดิฉันพร้อมเรียนรู้เทคโนโลยีใหม่ ๆ ปรับตัวได้ดี
              และมีความมุ่งมั่นที่จะพัฒนาทักษะเพื่อเติบโตในสายงานนี้
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "#00b0ff",
                  color: "#fff",
                  borderRadius: "30px",
                  px: 3,
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#0081b3" },
                }}
              >
                Download Resume
              </Button>

              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  backgroundColor: "#00b0ff",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#0081b3" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://github.com"
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

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "4px solid #00b0ff",
                borderRadius: 2,
                overflow: "hidden",
                width: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                },
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
