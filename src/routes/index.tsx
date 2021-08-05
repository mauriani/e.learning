import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const App = createStackNavigator();

import { Classes } from '../pages/Classes';

import { BottomNavigator } from './BottomNavigator';

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen
      name="Dashboard"
      component={BottomNavigator}
      options={{ headerShown: false }}
    />

    <App.Screen
      name="Classes"
      component={Classes}
      options={{ headerShown: false }}
    />
  </App.Navigator>
);

export default Routes;
