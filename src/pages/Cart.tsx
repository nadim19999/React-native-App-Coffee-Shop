import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ProductCart from '../components/ProductCart';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const { user } = useContext(UserContext);

  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('paypal');

  // Calcul du total selon la taille sélectionnée
  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + (item.selectedSize?.newPrice || 0) * (item.quantity || 1),
    0
  );

  const handleBuy = () => {
    Alert.alert('Payment Success', 'Your payment was successful!', [
      {
        text: 'OK',
        onPress: () => clearCart(),
      },
    ]);
  };

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
            updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)
          }
        />
      ))}

      {/* Total */}
      <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>

      {/* Choix du mode de paiement */}
      <View style={styles.paymentMethods}>
        <TouchableOpacity
          style={[
            styles.iconBox,
            paymentMethod === 'paypal' && styles.iconSelected,
          ]}
          onPress={() => setPaymentMethod('paypal')}
        >
          <Ionicons name="logo-paypal" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.iconBox,
            paymentMethod === 'card' && styles.iconSelected,
          ]}
          onPress={() => setPaymentMethod('card')}
        >
          <Ionicons name="card-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bouton Buy */}
      <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
        <Text style={styles.buyText}>BUY</Text>
      </TouchableOpacity>
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
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 15,
    marginVertical: 15,
  },
  iconBox: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSelected: {
    backgroundColor: '#333',
  },
  buyButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});