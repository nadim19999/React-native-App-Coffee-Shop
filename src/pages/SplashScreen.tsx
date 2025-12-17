import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const SplashScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/images/background.png')} style={{flex: 1}}>
        <View style={{marginTop: 120}}>
          <Image source={require('../assets/images/splashscreen.png')} />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 24, fontWeight: '500', color: 'white', paddingHorizontal: 100, textAlign: 'center'}}>Coffee so good, your taste buds will love it</Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 15, color: 'white', paddingHorizontal: 90, textAlign: 'center'}}>The best grain, the finest roast, the most powerful flavor</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: '#00512C', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 15, borderRadius: 30, marginHorizontal: 60, marginTop: 30}} onPress={() => navigation.navigate('TabNavigator')}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});