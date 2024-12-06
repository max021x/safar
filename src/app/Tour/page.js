'use client';
import List from '@/components/Tour/ListofTours'
import Navbar from '@/components/Homepage/NavBar';
import Sidebar from '@/components/Homepage/SideBar';
import React from 'react';

const Tour = ()=>{
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  return(
    <>
    
    <Navbar toggleDrawer={toggleDrawer('right', true)} />
    <Sidebar toggleDrawer={toggleDrawer} state={state} />
    <List/>
    </>
  )
}

export default Tour;