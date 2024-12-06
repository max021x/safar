import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import SurfingIcon from '@mui/icons-material/Surfing';
import VillaIcon from '@mui/icons-material/Villa';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const icons = [
  <AirplanemodeActiveIcon sx={{ color: 'orange' }} />,
  <DirectionsTransitIcon sx={{ color: 'orange' }} />,
  <SurfingIcon sx={{ color: 'orange' }} />,
  <VillaIcon sx={{ color: 'orange' }} />,
  <HouseboatIcon sx={{ color: 'orange' }} />,
  <AutoStoriesIcon sx={{ color: 'orange' }} />,
];

export default function SwipeableTemporaryDrawer({ toggleDrawer, state }) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton onClick={toggleDrawer(anchor, false)} style={{ float: 'right' }}>
      </IconButton>
      <Divider />
      <List>
        {['بلیط هواپیما', 'بلیط قطار', 'تور', 'هتل', 'ویلا و اقامتگاه', 'ویزا'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={text === 'تور' ? '/Tour' : '#'}>
              <ListItemButton>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant=''
                      sx={{
                        textAlign: 'right',
                        width: '100%',
                        padding: '20px',
                        marginRight: '30px',
                        marginTop: '10px',
                        fontFamily: 'Vazirmatn',
                      }}
                    >
                      {text}
                    </Typography>
                  }
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
