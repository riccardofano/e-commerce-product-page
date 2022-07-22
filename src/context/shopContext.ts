// Adapted from: https://codesandbox.io/s/nnwl26w86l

import { createContext } from "react";

export interface Image {
  text: string;
  fullSize: string;
  thumbnail: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  images: Image[];
}

interface CartProduct extends Product {
  amount: number;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Fall Limited Edition Sneakers",
    price: 12500,
    oldPrice: 25000,
    discount: 50,
    brand: "Sneaker company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    images: [
      {
        text: "Product 1",
        fullSize: "image-product-1.jpg",
        thumbnail: "image-product-1-thumbnail.jpg",
      },
      {
        text: "Product 2",
        fullSize: "image-product-2.jpg",
        thumbnail: "image-product-2-thumbnail.jpg",
      },
      {
        text: "Product 3",
        fullSize: "image-product-3.jpg",
        thumbnail: "image-product-3-thumbnail.jpg",
      },
      {
        text: "Product 4",
        fullSize: "image-product-4.jpg",
        thumbnail: "image-product-4-thumbnail.jpg",
      },
    ],
  },
];

export interface Shop {
  products: Product[];
  cart: CartProduct[];
  addToCart: (product: Product, amount: number) => void;
  removeFromCart: (productId: string) => void;
}

export default createContext<Shop>({
  products: mockProducts,
  cart: [],
  addToCart: (product: Product, amount: number) => {},
  removeFromCart: (productId: string) => {},
});
