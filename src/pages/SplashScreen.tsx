import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const SplashScreen = () => {
  return (
    <View>
        <Image source={require('../assets/images/splashscreen.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});