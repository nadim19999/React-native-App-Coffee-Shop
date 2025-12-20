import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';

const Product = ({ id, name, newPrice, path, sizes = [], isFavorite, onToggleFavorite }: any) => {
  const { toggleFavorite } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ id, name, newPrice, image: path, sizes });
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.7}
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
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>
            {name.length > 10 ? name.substring(0, 10) + '…' : name}
          </Text>

          {/* Cœur cliquable */}
          <TouchableOpacity onPress={() => toggleFavorite(id)}>
            <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={20} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 10, color: '#999999ff' }}>with sugar</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{newPrice} DT</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleAdd}
            style={{
              backgroundColor: '#00512C',
              borderRadius: 15,
              padding: 5,
            }}
          >
            <Ionicons name="add" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;