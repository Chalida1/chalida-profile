import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Aboutme from './Aboutme';
import Profile2 from './Profile2';
import Mycapabilities from './Mycapabilities';
import Myexperience from './Myexperience';
import Contact from './contact';



function Profile() {
  return (
    <>
     <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: '#0881c1', boxShadow: 3   }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chalida Manapai
          </Typography>
          
          <Button color="inherit">About Me</Button>
          <Button color="inherit">Capabilities</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      
      
    </Box>
    <Profile2 />
    <Aboutme />
    <Mycapabilities/>
    <Myexperience />
    <Contact />
    </>
  )
}

export default Profile