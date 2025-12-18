import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const photoprofile = require('../assets/images/photoprofile.png');
  const location = "Jakarta, Indonesia";
  const name = "Yudi";
  return (
    <View style={{ flex: 1 }} >
      <View style={{ flexDirection: 'row', marginTop: 50, marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' }} >
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={photoprofile} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }} >
          <Image source={require('../assets/icons/location.png')} />
          <Text>{location}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../assets/icons/notification.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 20 }} >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Good morninig, {name}</Text>
      </View>
      <View style={{ flexDirection: 'row', paddingVertical: 5, borderRadius: 30, marginTop: 20, backgroundColor: 'white', marginHorizontal: 30, paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' }} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
          <Image source={require('../assets/icons/search.png')} />
          <TextInput placeholder="Search Coffee ..." style={{ marginLeft: 15, color: '#80A896' }} />
        </View>
        <View>
          <Image source={require('../assets/icons/filter.png')} />
        </View>
      </View>
    </View>
  );
};

export default Home;