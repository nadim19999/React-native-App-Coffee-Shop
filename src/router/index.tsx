import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cart, Favorite, Home, Profile, SplashScreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ButtonTabs } from '../components/molecules';

const Stack = createStackNavigator();

const MyTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <MyTabs.Navigator screenOptions={() => ({ headerShown: false })} tabBar={props => <ButtonTabs {...props} />}>
      <MyTabs.Screen name="Home" component={Home} />
      <MyTabs.Screen name="Favorite" component={Favorite} />
      <MyTabs.Screen name="Cart" component={Cart} />
      <MyTabs.Screen name="Profile" component={Profile} />
    </MyTabs.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default Router;