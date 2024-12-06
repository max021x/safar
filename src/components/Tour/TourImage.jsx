import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function HeaderImg({src}) {
return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ padding: 0, margin: '80px 0' }}>
        <Box
          sx={{
            marginBottom:'200px',
            position: 'relative', // Ensure the text is centered
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '0',
            paddingBottom: '30%',
            boxShadow:1,
            borderRadius: 2, // Optional: rounded corners
            overflow: 'hidden',
          }}
        >
        </Box>
      </Container>
    </React.Fragment>
  );
}
