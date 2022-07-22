import Gallery from "./Gallery";
import { useViewport } from "./hooks/useViewport";

import { ReactComponent as IconCart } from "/images/icon-cart.svg";
import { ReactComponent as IconMinus } from "/images/icon-minus.svg";
import { ReactComponent as IconPlus } from "/images/icon-plus.svg";

function Main() {
  const { isDesktop } = useViewport();

  return (
    <main className={`main | grid even-columns ${isDesktop ? "container" : ""}`}>
      <Gallery />
      <article className={`flow ${!isDesktop ? "container" : ""}`}>
        <p className="text-primary-400 text-uppercase fw-bold fs-xs">Sneaker company</p>
        <h1 className="mg-sm text-neutral-800 fw-bold fs-xl">Fall Limited Edition Sneakers</h1>
        <p className="fs-sm">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
          they’ll withstand everything the weather can offer.
        </p>
        <div className="price | flex flex-v-center flex-sb fw-bold">
          <div className="flow-h | flex flex-v-center">
            <p className="text-neutral-800 fs-lg">$125.00</p>
            <span className="pill | text-primary-400 bg-primary-200 fs-sm">50%</span>
          </div>
          <p className="text-neutral-400 text-strike fs-sm">$250.00</p>
        </div>
        <div className="grid uneven-columns">
          <div className="flex flex-v-center flex-sb bg-neutral-300">
            <button className="button">
              <IconMinus />
            </button>
            <p className="text-neutral-800 fw-bold">0</p>
            <button className="button">
              <IconPlus />
            </button>
          </div>
          <button className="button | flow-h | flex flex-center" data-type="primary">
            <IconCart />
            <p>Add to cart</p>
          </button>
        </div>
      </article>
    </main>
  );
}

export default Main;
