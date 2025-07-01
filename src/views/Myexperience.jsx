import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";





function Myexperience() {
  return (
    <>
      <Box sx={{ backgroundColor: "#f0f9ff", py: 10, color: "#000" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={5}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ textTransform: "uppercase" }}
              >
                My Experience
              </Typography>
            </Grid>

        
            <Grid item xs={12} md={8}>
        
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={8}>
                  <Typography variant="h6" fontWeight="bold">
                    Freelance Developer
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccc", mt: 1 }}>
                    พัฒนาแอปเว็บรูปแบบที่ตอบโจทย์ผู้ใช้สำหรับโปรเจกต์พิเศษโดยใช้ React.js<br />
                    ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่ดี<br />
                    ปรับดีไซน์และปรับปรุงการโหลดเว็บเพจเพื่อให้ตอบสนองเร็วขึ้นและมีประสิทธิภาพ<br />
                    ร่วมพัฒนาและดูแลโปรเจกต์ส่วนตัวและแพลตฟอร์มเล็กๆ
                  </Typography>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: "right" }}>
                  <Typography variant="body2" sx={{ color: "#888" }}>
                    Nov 2023 – Present
                  </Typography>
                </Grid>
              </Grid>


              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="h6" fontWeight="bold">
                    Front-End Intern
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ccc", mt: 1 }}>
                    พัฒนาเว็บไซต์ธุรกิจที่เกี่ยวกับ HTML, CSS และ JavaScript<br />
                    ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG<br />
                    ทำงานร่วมกับทีมพัฒนาเพื่อเชื่อมต่อ API
                  </Typography>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: "right" }}>
                  <Typography variant="body2" sx={{ color: "#888" }}>
                    Sep 2023 – Nov 2023
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Myexperience;
