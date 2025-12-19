import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

const Product = ({ name, price, path }: { name: string; price: number; path: string }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#ccc',
          width: 130,
          height: 170,
        }}
      >
        <Image
          source={{ uri: path }}
          style={{ width: '100%', height: 80, borderRadius: 10 }}
          resizeMode="cover"
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>{name}</Text>
        <Text style={{ fontSize: 10, color: '#999999ff' }}>with sugar</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ flex: 1 }} >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{price} DT</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}
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
    </View>
  );
};

export default Product;
