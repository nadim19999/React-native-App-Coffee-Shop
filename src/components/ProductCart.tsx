import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { UserContext } from '../context/UserContext';

const ProductCart = ({
  id,
  name,
  image,
  isFavorite,
  sizes,
  sugarLevels,
  quantity,
  selectedSize: initialSelectedSize,
  onRemove,
  onIncrease,
  onDecrease,
}: any) => {
  const { toggleFavorite } = useContext(UserContext);

  const [selectedSize, setSelectedSize] = useState(initialSelectedSize || sizes[0]);
  const [selectedSugar, setSelectedSugar] = useState(sugarLevels[0]);

  return (
    <View style={{ marginBottom: 15 }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#ccc',
        }}
      >
        {/* ===== Ligne 0 : Remove (TOP RIGHT) ===== */}
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => onRemove(id)} style={{ paddingBottom: 5 }}>
            <Ionicons name="trash-outline" size={30} color="#4e4e4eff" />
          </TouchableOpacity>
        </View>

        {/* ===== Ligne 1 : Image + Infos + Favorite ===== */}
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image
            source={{ uri: image }}
            style={{ width: 150, height: 90, borderRadius: 10, marginRight: 10 }}
          />

          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{name}</Text>
            <Text style={{ color: '#999' }}>{selectedSugar}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              {selectedSize.newPrice} DT
            </Text>
          </View>

          <TouchableOpacity onPress={() => toggleFavorite(id)}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={25}
              color="red"
            />
          </TouchableOpacity>
        </View>

        {/* ===== Ligne 2 : Size + Sugar | Quantity ===== */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* LEFT */}
          <View style={{ flex: 1 }}>
            {/* Size */}
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              {sizes.map((s: any) => (
                <TouchableOpacity
                  key={s.label}
                  onPress={() => setSelectedSize(s)}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 15,
                    marginRight: 5,
                    backgroundColor:
                      selectedSize.label === s.label ? '#00512C' : '#eee',
                  }}
                >
                  <Text
                    style={{
                      color:
                        selectedSize.label === s.label ? 'white' : '#333',
                      fontSize: 12,
                    }}
                  >
                    {s.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Sugar */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              {sugarLevels.map((s: string) => (
                <TouchableOpacity
                  key={s}
                  onPress={() => setSelectedSugar(s)}
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 15,
                    marginRight: 5,
                    backgroundColor:
                      selectedSugar === s ? '#00512C' : '#eee',
                  }}
                >
                  <Text
                    style={{
                      color: selectedSugar === s ? 'white' : '#333',
                      fontSize: 11,
                    }}
                  >
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* RIGHT : Quantity */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => onDecrease && onDecrease()}
              style={{
                padding: 5,
                backgroundColor: '#00512C',
                borderRadius: 20,
                marginRight: 10,
              }}
            >
              <Ionicons name="remove" size={20} color="#fff" />
            </TouchableOpacity>

            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => onIncrease && onIncrease()}
              style={{
                padding: 5,
                backgroundColor: '#00512C',
                borderRadius: 20,
                marginLeft: 10,
              }}
            >
              <Ionicons name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCart;