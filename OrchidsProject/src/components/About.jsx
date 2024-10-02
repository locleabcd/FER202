import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Our Orchid Collection
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our orchid collection! We are passionate about cultivating and preserving these beautiful flowers.
      </Typography>
      <Typography variant="body1" paragraph>
        Our collection includes a wide variety of orchids, from rare species to popular hybrids. We take pride in providing high-quality plants and expert care advice to orchid enthusiasts.
      </Typography>
      <Typography variant="body1">
        Whether you're a seasoned collector or just starting your orchid journey, we're here to help you discover the perfect orchid for your home or garden.
      </Typography>
    </Container>
  );
};

export default About;