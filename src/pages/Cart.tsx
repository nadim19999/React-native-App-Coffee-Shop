import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ProductCart from '../components/ProductCart';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
const Cart = () => {
  const { cart, removeFromCart, updateQuantity } =
    useContext(CartContext);
  const { user } = useContext(UserContext);

  if (!cart || cart.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>🛒 Your cart is empty</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {cart.map((item: any) => (
        <ProductCart
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          isFavorite={user?.favorite?.includes(item.id)}
          quantity={item.quantity}
          sizes={item.sizes}
          selectedSize={item.selectedSize}
          sugarLevels={item.sugarLevels}
          sugarLevel={item.sugarLevel}
          onRemove={removeFromCart}
          onIncrease={() =>
            updateQuantity(item.id, item.quantity + 1)
          }
          onDecrease={() =>
            updateQuantity(
              item.id,
              item.quantity > 1 ? item.quantity - 1 : 1
            )
          }
        />
      ))}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
