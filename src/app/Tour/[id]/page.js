'use client';

import * as React from 'react';
import Navbar from '@/components/Homepage/NavBar';
import Sidebar from '@/components/Homepage/SideBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useParams } from 'next/navigation';
import StarIcon from '@mui/icons-material/Star';
import Link from '@mui/material/Link';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import { Button } from '@mui/material';
import Footer from '@/components/Homepage/Footer';
import tourdetails from '@/components/Tour/database';

const About = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const param = useParams();
  const pid = param?.id;
  const object = tourdetails.find((item) => {
    if (item.id == pid) {
      return item.detail;
    }
  }
  )

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer('right', true)} />
      <Sidebar toggleDrawer={toggleDrawer} state={state} />
      <CssBaseline />
      <Container maxWidth={true} sx={{ padding: 0, margin: '80px 0' }}>
        <Box
          sx={{
            position: 'relative', // Ensure the text is centered
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${object.detail.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '0',
            padding: '100px 0',
            boxShadow: 1,
            borderRadius: 2, // Optional: rounded corners
            overflow: 'hidden',
          }}
        >
        </Box>
      </Container>
      <Box>

      </Box>
      <Typography
        sx={{
          background:'orange',
          color:'#fff',
          fontWeight:'bold',
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
        <LocalCarWashIcon sx={{ fontSize:'2rem'}}/>
        {'تور ' + `${object.detail.city}` + ' به مدت ' + object.detail.days + ' روز '}
        <LocalCarWashIcon sx={{ fontSize:'2rem'}}/>
      </Typography>
      <Container />
      <Box
        sx={
          {
            position: 'relative',
            marginTop: '10px',
            padding: '10px',
            width: '100%',
            height: 'auto',
            boxShadow: 1,
            paddingBottom: '30%',
            textAlign: 'right'
          }
        }
      >
        <Box
          sx={
            {
              width: '60%',
              height: 'auto',
              boxShadow: 1,
              borderRadius: 10,
              display: 'flex',
              position: 'absolute',
              right: '0',
            }
          }
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
              borderRadius:5,
              padding:'10px 10px'
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
             <Link sx={{padding:'10px'}} href={'/'}>
             {'>'}اطلاعات هتل
             </Link>
            </Typography>
            <Typography>
                  {
                    object.detail.places.map((i)=>(
                      <StarIcon sx={{color:'orange'}}/>
                    ))
                  }
            </Typography>
          </Typography>

        </Box>
        <Box
        sx={{
          position:'relative',
          width:'30%',
          marginTop:'45px',
          padding:'80px',
          boxShadow:1,
          borderRadius:5,
        }}
        >
        <Typography
          sx={{
            position:'absolute',
            top:'20px',
            right:'20px',
            fontFamily:'Vazirmatn',
          }}
        > 
          هر بزرگسال در اتاق دو نفر   
        </Typography>
          <Typography
          sx={{
            position:'absolute',
            left:'0',
            top:'20px',
            fontFamily:'Vazirmatn',
            fontSize:'1rem',
            padding:'0 10px'
          }}
          >
          {object.detail.fee}
          </Typography>

        <Button
        sx={{
          position:'absolute',
          bottom:'30px',
          left:'70px',
          textAlign:'center',
          // padding:'10px 150px',
          backgroundColor:'orange',
          fontFamily:'Vazirmatn',
          fontSize:'1.5rem',
          color:'#fff',
          borderRadius:5,
        }}
        >
          انتخاب اتاق و تعداد نفرات
        </Button>
        </Box>
      </Box>

      <Footer/>

    </>
  )
};

export default About;












