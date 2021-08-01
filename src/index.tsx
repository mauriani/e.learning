import React from 'react';

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import theme from './global/styles/theme';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#6548A3" translucent />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
