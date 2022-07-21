import Gallery from "./Gallery";

import { ReactComponent as IconCart } from "/images/icon-cart.svg";
import { ReactComponent as IconMinus } from "/images/icon-minus.svg";
import { ReactComponent as IconPlus } from "/images/icon-plus.svg";

function Main() {
  return (
    <main>
      <Gallery />
      <article className="flow | container">
        <p className="text-primary-400 text-uppercase fw-bold fs-xs">Sneaker company</p>
        <h1 className="text-neutral-800 fw-bold fs-xl">Fall Limited Edition Sneakers</h1>
        <p className="fs-sm">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
          they’ll withstand everything the weather can offer.
        </p>
        <div className="flex flex-v-center flex-sb">
          <div className="flow-h | flex flex-v-center">
            <p className="text-neutral-800 fw-bold fs-lg">$125.00</p>
            <span className="text-primary-400 bg-primary-200">50%</span>
          </div>
          <p className="text-neutral-400 text-strike fs-sm">$250.00</p>
        </div>
        <div className="grid">
          <div className="flex flex-v-center flex-sb bg-neutral-300">
            <button className="button">
              <IconMinus />
            </button>
            <p className="text-neutral-800 fw-bold">0</p>
            <button className="button">
              <IconPlus />
            </button>
          </div>
          <button className="button | flex flex-center" data-type="primary">
            <IconCart />
            <p>Add to cart</p>
          </button>
        </div>
      </article>
    </main>
  );
}

export default Main;
