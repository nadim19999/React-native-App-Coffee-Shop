import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Text, TouchableOpacity, View, Image } from 'react-native';

const SpecialProduct = ({
  id,
  name,
  oldPrice,
  newPrice,
  path,
  isFavorite,
  onToggleFavorite,
}: {
  id: number;
  name: string;
  oldPrice: number;
  newPrice: number;
  path: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}) => {
  const { addToCart } = useContext(CartContext);
  return (
    <TouchableOpacity activeOpacity={0.7} style={{
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      width: '48%',
      marginBottom: 15,
    }}>
      <Image
        source={{ uri: path }}
        style={{ width: '100%', height: 90, borderRadius: 10 }}
        resizeMode="cover"
      />
      <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>
          {name.length > 12 ? name.substring(0, 12) + '…' : name}
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => onToggleFavorite(id)}>
          <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={20} color='red' />
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 10, color: '#999999ff' }}>with sugar</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{newPrice} DT</Text>
        {oldPrice > newPrice && <Text style={{ fontSize: 14, textDecorationLine: 'line-through', color: '#4b4b4bff' }}>{oldPrice} DT</Text>}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            addToCart({
              id,
              name,
              newPrice,
              oldPrice,
              image: path,
            })
          }
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
  );
};

export default SpecialProduct;