import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = ({ label, focus }: { label: string; focus: boolean }) => {
  switch (label) {
    case 'Home':
      return (
        focus ? <Ionicons name="home" size={24} color='#00512C' /> : <Ionicons name="home-outline" size={24} color='#00512C' />
      );
    case 'Favorite':
      return (
        focus ? <Ionicons name="heart" size={24} color='#00512C' /> : <Ionicons name="heart-outline" size={24} color='#00512C' />
      );
    case 'Cart':
      return (
        focus ? <Ionicons name="cart" size={24} color='#00512C' /> : <Ionicons name="cart-outline" size={24} color='#00512C' />
      );
    case 'Profile':
      return (
        focus ? <Ionicons name="person" size={24} color='#00512C' /> : <Ionicons name="person-outline" size={24} color='#00512C' />
      );
  }
};

const ButtonTabs = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingTop: 20, paddingHorizontal: 50, justifyContent: 'space-between' }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon label={label} focus={isFocused} />
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtonTabs;

const styles = StyleSheet.create({});