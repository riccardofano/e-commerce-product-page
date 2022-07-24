import { useState } from "react";
import { useA11yDialog } from "react-a11y-dialog";

import { useViewport } from "../hooks/useViewport";
import { Image } from "../context/shopContext";

import { ReactComponent as IconPrevious } from "/public/images/icon-previous.svg";
import { ReactComponent as IconNext } from "/public/images/icon-next.svg";
import Dialog from "./Dialog";

interface GalleryProps {
  images: Image[];
}

function Gallery({ images }: GalleryProps) {
  const { isDesktop } = useViewport();

  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = images[imageIndex];

  // a11y-dialog
  const [instance, attr] = useA11yDialog({
    id: "lightbox",
    role: "dialog",
    title: "Product lightbox",
  });

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
    const index = (imageIndex - 1 + images.length) % images.length;
    setImageIndex(index);
  };

  return (
    <section className="flow">
      <div className="full-size">
        <button className="open-dialog" onClick={() => isDesktop && instance?.show()}>
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

      <Dialog attr={attr} images={images} index={imageIndex} />
    </section>
  );
}

export default Gallery;
