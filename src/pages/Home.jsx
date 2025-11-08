import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        backgroundImage: 'url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Empowering Startups to Scale
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: '600px' }}>
          Partnering with early-stage startups to provide strategic guidance, capital, and mentorship.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
