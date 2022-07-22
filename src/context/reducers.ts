import { Product, Shop } from "./shopContext";

const addToCart = (product: Product, amount: number, state: Shop): Shop => {
  const cart = [...state.cart];
  const itemIndex = cart.findIndex((item) => item.id === product.id);

  if (itemIndex < 0) {
    cart.push({ ...product, amount });
  } else {
    const item = { ...cart[itemIndex] };
    item.amount += amount;
    cart[itemIndex] = item;
  }

  return { ...state, cart };
};

const removeFromCart = (productId: string, state: Shop): Shop => {
  const cart = [...state.cart];
  const itemIndex = cart.findIndex((item) => item.id === productId);

  if (itemIndex < 0) return { ...state };

  const item = { ...cart[itemIndex] };
  item.amount -= 1;

  if (item.amount === 0) {
    cart.splice(itemIndex, 1);
  } else {
    cart[itemIndex] = item;
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
