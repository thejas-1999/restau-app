import { createContext, useContext, useState } from "react";
import type { Food } from "../constants/foods";

// 🔹 Cart item type (Food + quantity)
type CartItem = Food & {
  quantity: number;
};

// 🔹 Context type (ALL functions must be declared here)
type CartContextType = {
  cart: CartItem[];
  addToCart: (food: Food) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void; // ✅ ADD THIS
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (food: Food) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === food.id);

      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...food, quantity: 1 }];
    });
  };

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        clearCart, // ✅ now TS is happy
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 🔹 Custom hook
export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
