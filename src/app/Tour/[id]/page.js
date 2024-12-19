'use client';

import * as React from 'react';
import Navbar from '@/components/Homepage/NavBar';
import Sidebar from '@/components/Homepage/SideBar';
import Tour_info from '@/components/Tour/Tour_Info';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const About = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  
  const [tourData, setTourData] = useState(null); // State to hold fetched data

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const param = useParams();
  const pid = param?.id;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch(`/api/toures/${pid}`);
        const response = await data.json();
        setTourData(response[0]); 
      } catch (error) {
        console.log(error);
      }        
    } 
    fetchdata();
  }, [pid]);

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer('right', true)} />
      <Sidebar toggleDrawer={toggleDrawer} state={state} />
      {tourData ? <Tour_info object={{ detail: tourData }} /> : <p>Loading...</p>} 
    </>
  );
};

export default About;
