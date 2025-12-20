import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Router from './src/router';
import { UserProvider } from './src/context/UserContext';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <UserProvider>
        <CartProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? '#ffffffff' : '#fff' }}>
            
            <NavigationContainer theme={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
              <Router />
            </NavigationContainer>
          </SafeAreaView>
        </CartProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
}
