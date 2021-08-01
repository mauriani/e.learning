import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const App = createStackNavigator();

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
  </App.Navigator>
);

export default Routes;
