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
                sx={{ mb: 3, textTransform: "uppercase", color: "#00b0ff" }}
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, lineHeight: 1.8, color: "#444" }}
              >
                ดิฉันจบการศึกษาจากมหาวิทยาลัยเอเชียอาคเนย์ <br />
                ปริญญาตรีบริหารธุรกิจบัณฑิต สาขาระบบสารสนเทศเพื่อธุรกิจดิจิทัล
                <br />
                (เกรดเฉลี่ย 3.54 เกียรตินิยมอันดับ1 )
                <br />
                มีความสนใจในสายงานพัฒนา Software โดยเฉพาะ Web Development ทั้ง
                <br />
                Frontend และ Backend
                <br />
                <br />
                จากโครงงานระหว่างเรียนได้พัฒนาระบบจองคอร์สปฏิบัติธรรม
                <br />
                พัฒนาระบบหลังบ้านในส่วนของผู้ดูแลระบบ (Back-End) ด้วยภาษา PHP
                <br />
                และฐานข้อมูล MySQL ออกแบบ Flow Chart
                <br />
                เพื่อวางโครงสร้างระบบก่อนพัฒนา
                ช่วยให้ทีมเข้าใจการทำงานของระบบโดยรวม
                <br />
                เขียนโค้ดสำหรับระบบล็อกอินและการจัดการสิทธิ์ผู้ใช้(admin/superadmin)<br />
                 ทดสอบระบบและแก้ไขบั๊กก่อนส่งมอบจริง
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
              ใบรับรองจบการศึกษา
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Aboutme;
