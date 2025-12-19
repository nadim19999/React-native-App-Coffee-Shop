import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Category from '../components/Category';
import Product from '../components/Product';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  const photoprofile = require('../assets/images/photoprofile.png');
  const location = "Jakarta, Indonesia";
  const name = "Yudi";

  type CategoryType = { id: number; name: string, icon: string };
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  type ProductType = { id: number; name: string, price: number, path: string, isFavorite: boolean };
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
    fetch('http://10.0.2.2:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', marginTop: 50, marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={photoprofile} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Image source={require('../assets/icons/location.png')} />
          <Text>{location}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../assets/icons/notification.png')} />
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Good morning, {name}</Text>
      </View>

      {/* Search bar */}
      <View style={{ flexDirection: 'row', paddingVertical: 5, borderRadius: 30, marginTop: 20, backgroundColor: '#e9e9e9ff', marginHorizontal: 30, paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/icons/search.png')} />
          <TextInput placeholder="Search Coffee ..." style={{ marginLeft: 15, color: '#80A896' }} />
        </View>
        <View>
          <Image source={require('../assets/icons/filter.png')} />
        </View>
      </View>

      {/* Categories */}
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
        {categories.map(item => (
          <Category
            key={item.id}
            name={item.name}
            icon={item.icon}
            isFocused={item.id === selectedCategoryId}
            onPress={() => setSelectedCategoryId(item.id)}
          />
        ))}
      </ScrollView>
      {/* Products */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
        {products.map(item => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            path={item.path}
          />
        ))}
      </ScrollView>
      {/* Special Offer */}
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Special Offer</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {products.map(item => (
          <SpecialProduct
            key={item.id}
            name={item.name}
            price={item.price}
            path={item.path}
            isFavorite={item.isFavorite}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;