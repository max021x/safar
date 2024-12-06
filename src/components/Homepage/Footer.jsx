import Image from 'next/image';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const apps_imgs = [
  'http://localhost/images/footer_img/apps/bazaar.webp',
  'http://localhost/images/footer_img/apps/anardoni.webp',
  'http://localhost/images/footer_img/apps/myket.webp',
  'http://localhost/images/footer_img/apps/pwa.webp',
];



const links = [
  'درباره ما',
  'تماس با ما',
  'کی بهتر از تو',
  'پرسش و پاسخ',
  'مجله سفرمارکت',
  'فرصت های شغلی',
  'مجوزها',
  'حریم خصوصی',
  'قوانین و مقررات',
  'تبلیغات در سفرمارکت',
  '۱۰ دلیل برای انتخاب سفرمارکت',
  'بلیط هواپیما',
  'بلیط هواپیما دبی',
  'بلیط هواپیما کیش',
  'بلیط هواپیما مشهد',
  'بلیط هواپیما تفلیس',
  'تور اقساطی',
  'سنجش رضایتمندی',
  'بلیط هواپیما استانبول',
  'بلیط هواپیما چارتر',
  'بلیط هواپیما خارجی',
  'بلیط هواپیما تورنتو',
  'راهنمای سفر',
];

export default function HeaderImg() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ padding: 0, margin: '10px 0' }}>
        <Box
          sx={{
            position: 'relative',
            bgcolor: '#fff',
            width: '100%',
            padding: '10px',
            boxShadow: 1,
            borderRadius: 2, // Optional: rounded corners
          }}
        >
          <Box
            sx={{
              padding: '30px',
              textAlign: 'right',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Vazirmatn',
                fontSize: '1.5rem',
              }}
            >
              اپلیکیشن سفرمارکت
              <Typography
                sx={{
                  fontFamily: 'Vazirmatn',
                  fontSize: '1rem',
                }}
              >
                با نصب اپلیکیشن سفرمارکت جهان در جیب شماست.
                <Link href="">اطلاعات بیشتر</Link>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '50px',
              marginLeft: '100px',
            }}
          >
            <Stack direction="row" spacing={2}>
              {apps_imgs.map((val, index) => (
                <Item
                  key={index}
                  sx={{
                    margin: '0px',
                    width: '100px', // Adjust width as needed
                    height: '50px', // Adjust height as needed
                    backgroundImage: `url(${val})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Stack>
          </Box>
          <Divider
            sx={{
              margin: '20px',
              borderBottomWidth: 2,
            }}
          />
          {/* Grid with links */}
          <Box sx={{ padding: '20px' }}>
            <Grid container spacing={2}>
              {links.map((link, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Link href="#" sx={{ fontFamily: 'Vazirmatn', fontSize: '1rem', display: 'block', textAlign: 'right' }}>
                    {link}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography
            sx={{
              fontFamily: 'Vazirmatn',
              fontSize: '1rem',
              textAlign: 'right',
              padding: '20px',
            }}
          >
          <Box sx={{
            padding:'5px',
            textAlign:'left',
            position:'absolute',
          }}>
          <WhatsAppIcon  sx={{marginLeft:'10px' , color:'#25D366'}}/>
          <InstagramIcon sx={{marginLeft:'10px' , color:'#E4405F'}}/>
          <TelegramIcon  sx={{marginLeft:'10px' , color:'#0088cc'}}/>
          <LinkedInIcon  sx={{marginLeft:'10px' , color:'#0e76a8'}}/>
          </Box>
            کلیه حقوق این سایت متعلق به شرکت ایرسا آسمان تابناک ایرانیان (سفرمارکت) می‌باشد. استفاده از مطالب سایت سفرمارکت فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
