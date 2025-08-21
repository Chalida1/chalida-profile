import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";   // 👈 ใช้ react-scroll
import Aboutme from "./Aboutme";
import Profile2 from "./Profile2";
import Mycapabilities from "./Mycapabilities";
import Myexperience from "./Myexperience";
import Contact from "./contact";
import Certificates from "./certificates";

function Profile() {
  const menuItems = [
    { label: "About Me", link: "about" },
    { label: "Certificates", link: "certificates" },
    { label: "Experience", link: "experience" },
    { label: "Skills", link: "skills" },
    { label: "Contact", link: "contact" },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#00b0ff", boxShadow: 2 }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              Chalida Manapai
            </Typography>

            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}   // 👈 ตรงกับ id ของ section
                smooth={true}    // 👈 เลื่อนนุ่มๆ
                duration={600}   // 👈 เวลาเลื่อน (ms)
                offset={-70}     // 👈 กัน header ทับ
              >
                <Button
                  color="inherit"
                  sx={{
                    mx: 1,
                    fontWeight: "bold",
                    "&:hover": {
                      borderBottom: "2px solid #fff",
                      borderRadius: 0,
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </Box>

      {/* ใส่ id ให้ตรงกับ link */}
      <section id="profile"><Profile2 /></section>
      <section id="about"><Aboutme /></section>
      <section id="certificates"><Certificates /></section>
      <section id="experience"><Myexperience /></section>
      <section id="skills"><Mycapabilities /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default Profile;
