
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
export default function Navbar({ toggleDrawer }) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <Link href={'/safarmarket'}>
        <Typography variant="h6" sx={{ flexGrow: 1 , color:'#000', }}>
          SAFAR MARKET
        </Typography>
        </Link>
        <Box sx={{ flexGrow: 1 }} /> {}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: 'orange',
            borderRadius: 20,
            fontFamily:'Vazirmatn',
            marginRight:  1,
            paddingLeft:  5,
            paddingRight: 5,
            position : 'absolute',
            right: 90,
            '&:hover': {
              backgroundColor: 'orange',
              color: 'white',
            },
          }}
        >
          ورود
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'orange',
            borderRadius: 20,
            fontFamily:'Vazirmatn',
            '&:hover': {
              backgroundColor: 'orange',
              color: 'white',
              
            },
          }}
        >
          ثبت نام
        </Button>
        <IconButton edge="end" color="#000" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
