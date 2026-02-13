import { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart (or increase quantity if already exists)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove item completely from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Increase quantity of an item
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity (remove if reaches 0)
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculated values (memoized)
  const { subtotal, totalDiscount, total } = useMemo(() => {
    const calculations = cartItems.reduce(
      (acc, item) => {
        const itemPrice = item.price;
        const itemDiscount = item.discount || 0;
        const discountedPrice = itemPrice * (1 - itemDiscount / 100);
        const itemTotal = discountedPrice * item.quantity;

        acc.subtotal += itemPrice * item.quantity;
        acc.totalDiscount += (itemPrice - discountedPrice) * item.quantity;
        acc.total += itemTotal;

        return acc;
      },
      { subtotal: 0, totalDiscount: 0, total: 0 }
    );

    return {
      subtotal: Number(calculations.subtotal.toFixed(0)),
      totalDiscount: Number(calculations.totalDiscount.toFixed(0)),
      total: Number(calculations.total.toFixed(0)),
    };
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    subtotal,
    totalDiscount,
    total,
    itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}