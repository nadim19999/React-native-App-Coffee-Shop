import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SplashScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;