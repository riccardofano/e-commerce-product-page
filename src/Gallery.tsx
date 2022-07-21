import { useState } from "react";

interface Product {
  text: string;
  fullSize: string;
  thumbnail: string;
}

const products: Product[] = [
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
];

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = products[imageIndex];

  return (
    <section>
      <img src={`images/${currentImage.fullSize}`} alt={currentImage.text} />
      <div>
        {products.map((p, i) => (
          <img key={i} src={`images/${p.thumbnail}`} alt={p.text} onClick={() => setImageIndex(i)} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
