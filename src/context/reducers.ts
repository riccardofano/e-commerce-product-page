import { Product, Shop } from "./shopContext";

// Adds specified amount of products
const addToCart = (product: Product, amount: number, state: Shop): Shop => {
  const cart = [...state.cart];
  const itemIndex = cart.findIndex((item) => item.id === product.id);

  if (itemIndex > 0) {
    cart[itemIndex].amount += amount;
  } else {
    cart.push({ ...product, amount });
  }

  return { ...state, cart };
};

// Removes product regardless of the quantity
const removeFromCart = (productId: string, state: Shop): Shop => {
  const cart = [...state.cart];
  const itemIndex = cart.findIndex((item) => item.id === productId);

  if (itemIndex > 0) {
    cart.splice(itemIndex, 1);
  }

  return { ...state, cart };
};

export type Actions =
  | { type: "ADD_PRODUCT"; payload: { product: Product; amount: number } }
  | { type: "REMOVE_PRODUCT"; payload: { productId: string } };

export const shopReducer = (state: Shop, action: Actions) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return addToCart(payload.product, payload.amount, state);
    case "REMOVE_PRODUCT":
      return removeFromCart(payload.productId, state);
  }
};
