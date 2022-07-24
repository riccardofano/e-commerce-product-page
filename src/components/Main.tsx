import { useContext, useState } from "react";
import ShopContext from "../context/shopContext";
import Gallery from "./Gallery";
import { useViewport } from "../hooks/useViewport";

import { ReactComponent as IconCart } from "/images/icon-cart.svg";
import { ReactComponent as IconMinus } from "/images/icon-minus.svg";
import { ReactComponent as IconPlus } from "/images/icon-plus.svg";

function Main() {
  const { isDesktop } = useViewport();
  const { products, addToCart } = useContext(ShopContext);
  const currentProduct = products[0];

  const { brand, name, description, price, oldPrice, discount, images } = currentProduct;

  const [amount, setAmount] = useState(1);
  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const descreaseAmount = () => {
    setAmount(amount - 1 > 1 ? amount - 1 : 1);
  };

  const addProductToCart = () => {
    addToCart(currentProduct, amount);
  };

  return (
    <main className={`main | grid even-columns ${isDesktop ? "container" : ""}`}>
      <Gallery images={images} />
      <article className={`flow ${!isDesktop ? "container" : ""}`}>
        <p className="text-primary-400 text-uppercase fw-bold fs-xs">{brand}</p>
        <h1 className="mg-sm text-neutral-800 fw-bold fs-xl">{name}</h1>
        <p className="fs-sm">{description}</p>
        <div className="price | flex flex-v-center flex-sb fw-bold">
          <div className="flow-h | flex flex-v-center">
            <p className="text-neutral-800 fs-lg">${(price / 100).toFixed(2)}</p>
            {discount && <span className="pill | text-primary-400 bg-primary-200 fs-sm">{discount}%</span>}
          </div>
          {oldPrice && <p className="text-neutral-400 text-strike fs-sm">${(oldPrice / 100).toFixed(2)}</p>}
        </div>
        <div className="grid uneven-columns">
          <div className="flex flex-v-center flex-sb bg-neutral-300">
            <button className="button" onClick={descreaseAmount}>
              <IconMinus />
            </button>
            <p className="text-neutral-800 fw-bold">{amount}</p>
            <button className="button" onClick={increaseAmount}>
              <IconPlus />
            </button>
          </div>
          <button className="button | flow-h | flex flex-center" data-type="primary" onClick={addProductToCart}>
            <IconCart />
            <p className="fw-bold">Add to cart</p>
          </button>
        </div>
      </article>
    </main>
  );
}

export default Main;
