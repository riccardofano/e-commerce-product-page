import { useState } from "react";
import { useViewport } from "./hooks/useViewport";
import { Image } from "./context/shopContext";

import { ReactComponent as IconPrevious } from "../images/icon-previous.svg";
import { ReactComponent as IconNext } from "../images/icon-next.svg";

interface GalleryProps {
  images: Image[];
}

function Gallery({ images }: GalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = images[imageIndex];

  const { isDesktop } = useViewport();

  const Thumbnails = (
    <div className="thumbnails | flex">
      {images.map((p, i) => (
        <div key={i} data-active={imageIndex === i} onClick={() => setImageIndex(i)}>
          <img src={`images/${p.thumbnail}`} alt={p.text} />
        </div>
      ))}
    </div>
  );

  const nextImage = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  const previousImage = () => {
    const index = imageIndex - 1 < 0 ? images.length - 1 : imageIndex - 1;
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
