
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  paddingTop: '50px', 
  paddingBottom: '50px', 
  margin: '5px',
  position: 'relative',
  top: '-50px',
  borderRadius: 10,
  height: '200px',
}));

export default function Items() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Box sx={{ flex: 1, textAlign: 'right' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Vazirmatn',
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }, 
                  }}
                >
                  دیگه گرون نخر
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Vazirmatn',
                    textAlign: 'right',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, 
                  }}
                >
                  همونطور که برای خرید کالا و خدمات با قیمت مناسب و ارزانتر از بقیه جاها به بازار و یا بورس اون می‌ری، برای خرید ارزونترین بلیط هواپیما و خدمات سفر هم ،به تنها بازار سفر گردشگری یعنی سفرمارکت بیا. 
                </Typography>
              </Box>
              <CurrencyExchangeOutlinedIcon 
                sx={{ marginLeft: '8px', fontSize: '50px', color: 'orange', margin: '0 15px' }}
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Box sx={{ flex: 1, textAlign: 'right' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Vazirmatn',
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }, 
                  }}
                >
                  مقایسه قیمت
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Vazirmatn',
                    textAlign: 'right',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, 
                  }}
                >
                  قیمت سایت‌های مختلف رو توی اولین و بزرگترین بازار سفر یکجا ببین، مقایسه کن و بهترین گزینه رو انتخاب کن. 
                </Typography>
              </Box>
              <ReceiptLongOutlinedIcon
                sx={{ marginLeft: '8px', fontSize: '50px', color: 'orange', margin: '0 15px' }}
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Box sx={{ flex: 1, textAlign: 'right' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Vazirmatn',
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }, 
                  }}
                >
                  خرید امن و مطمئن
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Vazirmatn',
                    textAlign: 'right',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                  }}
                >
                  همه فروشندگان سفرمارکت مجوزهای قانونی لازم از ارگان‌های مربوطه رو دارن. همچنین نماد اعتماد الکترونیک (ای‌نماد) پس با خیال راحت انتخاب و خرید کن 
                </Typography>
              </Box>
              <MilitaryTechOutlinedIcon
                sx={{ marginLeft: '8px', fontSize: '50px', color: 'orange', margin: '0 15px' }}
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Box sx={{ flex: 1, textAlign: 'right' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Vazirmatn',
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }, // Responsive font size
                  }}
                >
                  خرید سریع و صحیح
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Vazirmatn',
                    textAlign: 'right',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, // Responsive font size
                  }}
                >
                  به جای اینکه بین صدتا سایت و اپلیکیشن مختلف بگردی و آخرش هم گرون بخری، با سفرمارکت همه ی قیمت ها رو یکجا ببین و بهترین گزینه رو انتخاب کن.
                </Typography>
              </Box>
              <StackedBarChartOutlinedIcon 
                sx={{ marginLeft: '8px', fontSize: '50px', color: 'orange', margin: '0 15px' }}
              />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
