import { useReducer } from "react";
import { shopReducer } from "./context/reducers";
import ShopContext, { mockProducts, Product } from "./context/shopContext";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const products = mockProducts;

  const addToCart = (product: Product, amount: number) => {
    dispatch({ type: "ADD_PRODUCT", payload: { product, amount } });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: { productId } });
  };

  const [shopState, dispatch] = useReducer(shopReducer, { products, cart: [], addToCart, removeFromCart });

  return (
    <ShopContext.Provider value={{ ...shopState }}>
      <Header />
      <Main />
    </ShopContext.Provider>
  );
}

export default App;
