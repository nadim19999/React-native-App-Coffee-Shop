import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Category = ({
  name,
  icon,
  isFocused,
  onPress
}: {
  name: string;
  icon: string;
  isFocused: boolean;
  onPress: () => void;
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: isFocused ? '#00512C' : 'white',
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 30,
          borderWidth: isFocused ? 0 : 1,
          borderColor: '#ccc',
        }}
      >
        <Ionicons
          name={isFocused ? `${icon}-outline` : icon}
          size={15}
          color={isFocused ? 'white' : '#00512C'}
          style={{ marginRight: 8 }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: isFocused ? 'white' : '#00512C',
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;