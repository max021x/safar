'use client';

import * as React from 'react';
import Navbar from '@/components/Homepage/NavBar';
import Sidebar from '@/components/Homepage/SideBar';
import { useParams } from 'next/navigation';
import tourdetails from '@/components/Tour/database';
import Tour_info  from '@/components/Tour/Tour_Info';

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
      <Tour_info object={object} />
    </>
  )
};

export default About;












