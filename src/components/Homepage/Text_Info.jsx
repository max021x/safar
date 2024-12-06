
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="ms" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{
          padding:'40px',
          backgroundColor:'#fff',
          position: 'relative',
          top: '-150px',
          width: '100%',  // Adjust width as needed
          height: 'auto',
          textAlign: 'center',
          borderRadius: 7 , // Optional: for rounded corners
          boxShadow: 3,    // Optional: for a subtle shadow effect
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              variant="h6"
              component="div"
              color="orange"
              sx={{
                fontFamily: 'Vazirmatn',
                fontSize: { xs: '1rem', sm: '2rem', md: '2.5rem', lg: '1.5rem', xl: '3.5rem' }, // Responsive font sizes
              }}
            >
              مقایسه و خرید قسطی همه خدمات گردشگری
            </Typography>
            <InfoOutlinedIcon sx={{ marginLeft: '8px' , color:'orange' }} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
