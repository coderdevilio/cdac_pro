import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h2" gutterBottom>
          Community Development
        </Typography>
        <Typography variant="h4" color="text.secondary">
          Cohort
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
