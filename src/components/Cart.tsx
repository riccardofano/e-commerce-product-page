import { useContext, useState } from "react";
import ShopContext from "../context/shopContext";

import { ReactComponent as IconDelete } from "/public/images/icon-delete.svg";
import { ReactComponent as IconCart } from "/public/images/icon-cart.svg";

function Cart() {
  const { cart, removeFromCart } = useContext(ShopContext);
  const [open, setOpen] = useState(false);

  const isEmpty = cart.length === 0;
  const itemsInCart = cart.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const CartProductList = () => (
    <ul className="cart-list flex-grow">
      {cart.map((product) => (
        <li key={product.id} className="flex flex-gap flex-v-center">
          <img src={`/images/${product.images[0].thumbnail}`} alt="" />
          <div className="cart-info">
            <p className="cart-product-name">{product.name}</p>
            <p>
              ${(product.price / 100).toFixed(2)} x {product.amount}{" "}
              <span className="text-neutral-800 fw-bold">${((product.price * product.amount) / 100).toFixed(2)}</span>
            </p>
          </div>
          <button className="cart-remove | button" onClick={() => removeFromCart(product.id)}>
            <IconDelete />
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="cart">
      <button className="cart-button | button | flex flex-v-center" onClick={toggleOpen}>
        {!isEmpty && <span className="cart-pill">{itemsInCart}</span>}
        <IconCart className={`${open ? "active" : ""}`} />
      </button>

      {open && (
        <div className="bucket | flex flex-col">
          <header className="cart-header | text-neutral-800 fw-bold">Cart</header>
          <section className="cart-body | flex flex-col flex-grow flex-gap">
            {isEmpty ? (
              <p className="text-center fw-bold mb-auto">Cart is empty.</p>
            ) : (
              <>
                <CartProductList />
                <button className="button | fw-bold" data-type="primary">
                  Checkout
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default Cart;
