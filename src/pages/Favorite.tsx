import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import SpecialProduct from '../components/SpecialProduct';
import { UserContext } from '../context/UserContext';

const Favorite = () => {
  const { user, toggleFavorite } = useContext(UserContext);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  const favoriteProducts = products.filter(item => user.favorite.includes(item.id));

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginHorizontal: 20 }}>
      {favoriteProducts.map(item => (
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
    </ScrollView>
  );
};

export default Favorite;