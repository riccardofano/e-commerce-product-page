import { useState } from "react";
import { useViewport } from "./hooks/useViewport";

import { ReactComponent as IconPrevious } from "../images/icon-previous.svg";
import { ReactComponent as IconNext } from "../images/icon-next.svg";

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

  const { isDesktop } = useViewport();

  const Thumbnails = (
    <div className="thumbnails | flex">
      {products.map((p, i) => (
        <div key={i} data-active={imageIndex === i} onClick={() => setImageIndex(i)}>
          <img src={`images/${p.thumbnail}`} alt={p.text} />
        </div>
      ))}
    </div>
  );

  const nextImage = () => {
    setImageIndex((imageIndex + 1) % products.length);
  };

  const previousImage = () => {
    const index = imageIndex - 1 < 0 ? products.length - 1 : imageIndex - 1;
    setImageIndex(index);
  };

  return (
    <section className="flow">
      <div className="full-size">
        <img src={`images/${currentImage.fullSize}`} alt={currentImage.text} />
        {!isDesktop && (
          <div>
            <button onClick={previousImage} data-type="previous">
              <IconPrevious />
            </button>
            <button onClick={nextImage} data-type="next">
              <IconNext />
            </button>
          </div>
        )}
      </div>
      {isDesktop && Thumbnails}
    </section>
  );
}

export default Gallery;
