import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Image
          source={require('../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Find Your Coffee..."
            placeholderTextColor="#52555A"
            style={styles.searchInput}
          />
        </View>
        Find the best{'\n'}coffee for you
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  title: {
    marginTop: 30,
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  searchContainer: {
    marginTop: 25,
    backgroundColor: '#141921',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  searchInput: {
    height: 50,
    color: '#FFFFFF',
    fontSize: 14,
  },
});