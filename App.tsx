import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Router from './src/router';
import { UserProvider } from './src/context/UserContext';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <UserProvider>
        <CartProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <NavigationContainer theme={DefaultTheme}>
              <Router />
            </NavigationContainer>
          </SafeAreaView>
        </CartProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
}