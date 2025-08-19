import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Aboutme from "./Aboutme";
import Profile2 from "./Profile2";
import Mycapabilities from "./Mycapabilities";
import Myexperience from "./Myexperience";
import Contact from "./contact";
import Certificates from "./certificates";

function Profile() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
       
        <AppBar
          position="static"
          sx={{ backgroundColor: "#00b0ff", boxShadow: 2 }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              Chalida Manapai
            </Typography>

            {["About Me", "Capabilities", "Experience", "Contact"].map(
              (item, i) => (
                <Button
                  key={i}
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
                  {item}
                </Button>
              )
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Profile2 />
      <Aboutme />
      <Certificates />
      <Myexperience />
      <Mycapabilities />
      <Contact />
    </>
  );
}

export default Profile;
