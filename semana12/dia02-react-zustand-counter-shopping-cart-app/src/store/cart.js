import { create } from "zustand";

export const useCartStore = create(
  (set, get) => ({
    // Estado INICIAL
    cart: [],

    // Actions
    addToCart: (newProduct) => {
      // Esta línea se ejecuta cuando el producto es nuevo en el carrito de compras
      set(state => ({
        cart: [...state.cart, { ...newProduct, quantity: 1 }]
      }))
    },
    removeFromCart: (id) => {

    },
    cleanCart: () => {

    }
  })
)