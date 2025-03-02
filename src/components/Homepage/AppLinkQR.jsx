
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';

export default function Adv_App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="ms" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{
          backgroundImage: 'url(/images/adv_img/mobile_bg.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#fff',
          paddingBottom: '250px',
          position: 'relative',
          top: '-100px',
          width: '100%',
          height: 'auto',
          textAlign: 'center',
          borderRadius: 2,
          boxShadow: 3,
        }}>
          <Box
            sx={{
              backgroundImage: 'url(images/adv_img/qrcode.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              width: '100px',
              backgroundColor: '#fff',
              position: 'relative',
              left: '100px',
              top: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid',
              borderRadius: 2,
              padding: '10px',
              flexDirection: 'column', // Ensure column layout for text below image
            }}
          >
            <Box sx={{ width: '100%', height: '100%' }} /> {/* Placeholder for background image */}
            <Typography sx={{ marginTop: '200px', fontFamily: 'Vazirmatn' }}>
              برای دانلود اسکن کنید
            </Typography>
          </Box>

          {/* another text in the center of the main box */}
          <Box sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            textAlign: 'center' 
          }}>
            <Typography sx={{ fontFamily: 'Vazirmatn', fontSize: '1.5rem', marginBottom: '10px', color: 'black' }}>
            با دانلود اپلیکیشن سفرمارکت 
            
            جهان در جیب شما است
            </Typography>
            <Button variant="contained" color="primary" sx={{padding:'10px 40px' , bgcolor:'orange'}}>
              <Typography sx={{fontFamily:'Vazirmatn'}}>
                دانلود و راهنمای نصب
              </Typography>
              <PhoneAndroidOutlinedIcon/>
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
