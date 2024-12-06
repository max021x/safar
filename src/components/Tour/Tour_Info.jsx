import '@/app/globals.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Link from '@mui/material/Link';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import { Button } from '@mui/material';
import Footer from '@/components/Homepage/Footer';

const Tour_info = ({ object }) => {
  const [isSticky, setIsSticky] = useState(true);
  const [bottomOffset, setBottomOffset] = useState(30);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const buttonBox = document.getElementById('button-box');
      const footerTop = footer.getBoundingClientRect().top;
      const buttonBoxHeight = buttonBox.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;

      if (footerTop <= windowHeight - buttonBoxHeight) {
        setIsSticky(false);
        setBottomOffset(windowHeight - footerTop - buttonBoxHeight);
      } else {
        setIsSticky(true);
        setBottomOffset(30);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${object.detail.img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '50vh', // Adjust the height as needed
          boxShadow: 1,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      />
      <Box></Box>
      <Typography
        sx={{
          background: 'orange',
          color: '#fff',
          fontWeight: 'bold',
          padding: '20px 20px',
          width: '100%',
          height: 'auto',
          textAlign: 'center',
          fontFamily: 'Vazirmatn',
          fontSize: '2rem',
          boxShadow: 2,
          borderTop: 'solid #eee 1px',
        }}
      >
        <LocalCarWashIcon sx={{ fontSize: '2rem' }} />
        {'تور ' + `${object.detail.city}` + ' به مدت ' + object.detail.days + ' روز '}
        <LocalCarWashIcon sx={{ fontSize: '2rem' }} />
      </Typography>
      <Container />

      {/* main box */}
      <Box
        sx={{
          bgcolor:'#fff',
          position: 'relative',
          marginTop: '10px',
          padding: '10px',
          width: '100%',
          height: 'auto',
          boxShadow: 1,
          paddingBottom: '30%',
          textAlign: 'right',
        }}
      >
        <Box
          sx={{
            width: '60%',
            height: 'auto',
            boxShadow: 1,
            borderRadius: 10,
            display: 'flex',
            position: 'absolute',
            right: '0',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              top: '25px',
              width: '100%',
              textAlign: 'right',
              fontSize: '1.5rem',
              marginTop: '20px',
              fontFamily: 'Vazirmatn',
              boxShadow: 5,
              borderRadius: 5,
              padding: '10px 10px',
            }}
          >
            تور {object.detail.city}
            <Typography
              sx={{
                position: 'absolute',
                left: '0',
                top: '25px',
                padding: '0 10px',
                fontFamily: 'Vazirmatn',
              }}
            >
              {object.detail.tourCode} : کد تور
            </Typography>
            <Typography
              sx={{
                padding: '10px 0px',
                fontFamily: 'Vazirmatn',
              }}
            >
              {object.detail.hotel}
              <Link sx={{ padding: '10px' }} href={'/'}>
                {'>'}اطلاعات هتل
              </Link>
            </Typography>
            <Typography>
              {object.detail.places.map((i, index) => (
                <StarIcon key={index} sx={{ color: 'orange' }} />
              ))}
            </Typography>
          </Typography>
        </Box>
        {/* button box */}
        <Box
          id="button-box"
          sx={{
            bgcolor:'#fff',
            position: isSticky ? 'fixed' : 'absolute',
            width: '30%',
            marginTop: '5px',
            padding: '80px',
            boxShadow: 1,
            borderRadius: 5,
            bottom: `${bottomOffset}px`,
            transition: 'bottom 0.3s ease-in-out',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontFamily: 'Vazirmatn',
            }}
          >
            هر بزرگسال در اتاق دو نفر
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              left: '0',
              top: '20px',
              fontFamily: 'Vazirmatn',
              fontSize: '1rem',
              padding: '0 10px',
            }}
          >
            {object.detail.fee}
          </Typography>

          <Button
            sx={{
              position: 'absolute',
              bottom: '30px',
              left: '70px',
              textAlign: 'center',
              backgroundColor: 'orange',
              fontFamily: 'Vazirmatn',
              fontSize: '1.5rem',
              color: '#fff',
              borderRadius: 5,
            }}
          >
            انتخاب اتاق و تعداد نفرات
          </Button>
        </Box>
      </Box>
      <Footer id='footer'/>
    </>
  );
};

export default Tour_info;