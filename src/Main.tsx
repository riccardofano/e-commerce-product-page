import Gallery from "./Gallery";

function Main() {
  return (
    <main>
      <Gallery />
      <article>
        <p>Sneaker company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
          they’ll withstand everything the weather can offer.
        </p>
        <div>
          <div>
            <p>$125.00</p>
            <span>50%</span>
          </div>
          <p>$250.00</p>
        </div>
        <div>
          <div>
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
          <button>
            <img src="images/icon-cart.svg" alt="" />
            <p>Add to cart</p>
          </button>
        </div>
      </article>
    </main>
  );
}

export default Main;
