import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

const SpecialProduct = ({ name, price, path, isFavorite }: { name: string; price: number; path: string, isFavorite: boolean }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '48%',
        marginBottom: 15,
      }}
    >
      <Image
        source={{ uri: path }}
        style={{ width: '100%', height: 90, borderRadius: 10 }}
        resizeMode="cover"
      />
      <View style={{ flexDirection: 'row', marginTop: 5 , justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold'}}>
            {name}
        </Text>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={20} color='red' />
      </View>
      

      <Text style={{ fontSize: 10, color: '#999999ff' }}>
        with sugar
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 5,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {price} DT
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#00512C',
            borderRadius: 15,
            padding: 5,
          }}
        >
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SpecialProduct;