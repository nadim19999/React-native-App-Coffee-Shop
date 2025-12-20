import React, { createContext, useCallback, useMemo, useState } from 'react';

export type Size = { label: string; newPrice: number; oldPrice?: number };
export type CartItem = {
  id: number;
  name: string;
  image?: string;
  quantity: number;
  sizes: Size[];
  sugarLevels: string[];
  selectedSize?: Size;
};

export type CartContextData = {
  cart: CartItem[];
  addToCart: (product: Partial<CartItem> & { id: number; name: string; newPrice?: number; image?: string; oldPrice?: number }) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

export const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const normalizeProduct = (product: any): CartItem => {
    const sizes: Size[] = product.sizes && product.sizes.length > 0
      ? product.sizes
      : [{ label: 'M', newPrice: product.newPrice ?? 0, oldPrice: product.oldPrice }];

    const sugarLevels = product.sugarLevels || ['No sugar', 'Less', 'Normal'];

    return {
      id: product.id,
      name: product.name,
      image: product.image || product.path || product.imageUri || undefined,
      quantity: product.quantity ?? 1,
      sizes,
      sugarLevels,
      selectedSize: sizes[0],
    };
  };

  const addToCart = useCallback((product: Partial<CartItem> & { id: number; name: string; newPrice?: number; image?: string; oldPrice?: number }) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      const item = normalizeProduct(product);
      return [...prev, item];
    });
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    setCart(prev => {
      if (quantity <= 0) return prev.filter(p => p.id !== id);
      return prev.map(p => (p.id === id ? { ...p, quantity } : p));
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart(prev => prev.filter(p => p.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const totals = useMemo(() => {
    const totalItems = cart.reduce((s, p) => s + p.quantity, 0);
    const totalPrice = cart.reduce((s, p) => s + p.quantity * (p.selectedSize?.newPrice ?? 0), 0);
    return { totalItems, totalPrice };
  }, [cart]);

  const value = useMemo(() => ({
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems: totals.totalItems,
    totalPrice: totals.totalPrice,
  }), [cart, addToCart, updateQuantity, removeFromCart, clearCart, totals]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};