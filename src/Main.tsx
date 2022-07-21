function Main() {
  return (
    <main>
      <section>
        <img src="images/image-product-1.jpg" alt="Product 1" />
        <div>
          <img src="images/image-product-1-thumbnail.jpg" alt="Product 1 thumbnail" />
          <img src="images/image-product-2-thumbnail.jpg" alt="Product 2 thumbnail" />
          <img src="images/image-product-3-thumbnail.jpg" alt="Product 3 thumbnail" />
          <img src="images/image-product-4-thumbnail.jpg" alt="Product 4 thumbnail" />
        </div>
      </section>
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
