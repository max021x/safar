
'use client';import * as React from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import HeaderImg from './Header';
import Text_Info from './Text_Info';
import AppLinkQR from "./AppLinkQR";
import Advanteges from "./Advanteges";
import Footer from "./Footer";

function App() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer('right', true)} />
      <Sidebar toggleDrawer={toggleDrawer} state={state} />
      <HeaderImg /> 
      <Text_Info />
      <AppLinkQR />
      <Advanteges />
      <Footer  />
    </>
  );
}

export default App;




