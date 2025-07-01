import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import tiw from '../assets/tiw.jpg'; 

function Profile2() {
  return (
    <>
    <Box sx={{ backgroundColor: '#f0f9ff', py: 8 }}>

        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ px: 5, pt: 8, backgroundColor: '#f0f9ff' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            HI, I AM <br /> CHALIDA M.
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mb: 3 }}>
            นักพัฒนาเว็บไซต์ฝั่งฟรอนต์เอนด์จากประเทศไทย ที่มีความหลงใหลในการสร้าง <br />
            เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button variant="contained" sx={{ backgroundColor: '#c6f62d', color: '#000' }}>
              CONTACT ME
            </Button>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ backgroundColor: '#222', color: '#c6f62d' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://github.com" target="_blank" sx={{ backgroundColor: '#222', color: '#c6f62d' }}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'start' }}>
          <Box
            component="img"
            src={tiw} // <-- เปลี่ยนเป็น path รูปของคุณ
            alt="Profile"
            sx={{
              width: 300,
              height: 'auto',
              borderRadius: 6,
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Profile2