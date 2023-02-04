import React from 'react';
import { Container, ThemeProvider } from '@mui/material';
import { AppRouter } from './route/AppRouter';
import 'App.css'
import { lightTheme } from './style/lightTheme';

function App() {
  console.log(lightTheme)
  return (
    <ThemeProvider theme={lightTheme}>
      <Container maxWidth='xl'>
        <AppRouter />
      </Container>
    </ThemeProvider>
  );
}

export default App;
