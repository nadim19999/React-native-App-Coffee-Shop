import React, { useEffect, useState, useContext } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Category from '../components/Category';
import Product from '../components/Product';
import SpecialProduct from '../components/SpecialProduct';
import { getUser } from '../services/auth';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { user, setUser, toggleFavorite } = useContext(UserContext);

  const [categories, setCategories] = useState<{ id: number; name: string; icon: string }[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [products, setProducts] = useState<{ id: number; name: string; sizes: any[]; categoryId: number; path: string; special: boolean }[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(console.log);

    fetch('http://10.0.2.2:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.log);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={{ uri: user.image }} style={{ width: 40, height: 40, borderRadius: 20, resizeMode: 'cover' }} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Image source={require('../assets/icons/location.png')} />
          <Text>{user.location}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={require('../assets/icons/notification.png')} />
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Good morning, {user.name}</Text>
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
        <Category name="All" icon="cafe" isFocused={selectedCategoryId === null} onPress={() => setSelectedCategoryId(null)} />
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
        {products
          .filter(item => selectedCategoryId === null || item.categoryId === selectedCategoryId)
          .map(item => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              newPrice={item.sizes[0].newPrice}
              path={item.path}
              sizes={item.sizes}
              isFavorite={user.favorite.includes(item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
      </ScrollView>

      {/* Special Offer */}
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Special Offer</Text>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {products
          .filter(item => item.sizes[0].oldPrice > item.sizes[0].newPrice && (selectedCategoryId === null || item.categoryId === selectedCategoryId))
          .map(item => (
            <SpecialProduct
              key={item.id}
              id={item.id}
              name={item.name}
              oldPrice={item.sizes[0].oldPrice}
              newPrice={item.sizes[0].newPrice}
              path={item.path}
              isFavorite={user.favorite.includes(item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default Home;
