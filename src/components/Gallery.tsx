import { useState } from "react";
import { useViewport } from "../hooks/useViewport";
import { Image } from "../context/shopContext";

import { ReactComponent as IconPrevious } from "/images/icon-previous.svg";
import { ReactComponent as IconNext } from "/images/icon-next.svg";

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
        <button key={i} className="button" data-active={imageIndex === i} tabIndex={0} onClick={() => setImageIndex(i)}>
          <img src={`/images/${p.thumbnail}`} alt={p.text} />
        </button>
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
        <button className="open-dialog">
          <img src={`/images/${currentImage.fullSize}`} alt={currentImage.text} />
        </button>
        {!isDesktop && (
          <div>
            <button className="img-navigation" data-type="previous" onClick={previousImage}>
              <IconPrevious />
            </button>
            <button className="img-navigation" data-type="next" onClick={nextImage}>
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
