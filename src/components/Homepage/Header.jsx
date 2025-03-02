import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const images = [
  './images/header_img/blite.webp',
  './images/header_img/exp.webp',
  './images/header_img/haraj.jpg',
  './images/header_img/phone.webp',
];

export default function HeaderImg() {
  const [currentImage, setCurrentImage] = React.useState(images[0]);

  React.useEffect(() => {
    let i = 0 ;
    const interval = setInterval(() => {
      if(i >= images.length){
        i = 0 ;
      }
      setCurrentImage(images[i]);
      i++;
    }, 4000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ padding: 0, margin: '80px 0' }}>
        <Box
          sx={{
            marginBottom:'200px',
            position: 'relative', // Ensure the text is centered
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${currentImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '0',
            paddingBottom: '35%',
            
            boxShadow:1,
            borderRadius: 2, // Optional: rounded corners
            overflow: 'hidden',
          }}
        >
        </Box>
      </Container>
    </React.Fragment>
  );
}