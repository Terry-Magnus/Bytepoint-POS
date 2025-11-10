// lib/store.ts (Zustand)
import { create } from "zustand";

type CartItem = { id: string; name: string; price: number; quantity: number };
type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({ cart: [...state.cart, { ...item, quantity: 1 }] })),
  deleteCart: (newCart: CartItem[]) => set({ cart: newCart }),
}));
