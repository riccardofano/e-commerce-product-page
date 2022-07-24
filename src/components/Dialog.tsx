import { useEffect, useState } from "react";
import { A11yDialogConfig } from "react-a11y-dialog";
import { createPortal } from "react-dom";

import { Image } from "../context/shopContext";

import { ReactComponent as IconClose } from "/images/icon-close.svg";
import { ReactComponent as IconPrevious } from "/images/icon-previous.svg";
import { ReactComponent as IconNext } from "/images/icon-next.svg";

interface DialogProps {
  attr: A11yDialogConfig;
  images: Image[];
  index: number;
}

function Dialog({ attr, images, index }: DialogProps) {
  const [dialogIndex, setDialogIndex] = useState(index);
  const currentImage = images[dialogIndex];

  useEffect(() => {
    setDialogIndex(index);
  }, [index]);

  const nextImage = () => {
    setDialogIndex((dialogIndex + 1) % images.length);
  };

  const previousImage = () => {
    const index = (dialogIndex - 1 + images.length) % images.length;
    setDialogIndex(index);
  };

  const dialog = createPortal(
    // Ref had to be set as any because the type provided is incorrect
    <div {...attr.container} ref={attr.container.ref as any} className="dialog-container">
      <div {...attr.overlay} className="dialog-overlay" />

      <div {...attr.dialog} className="dialog-content">
        <button {...attr.closeButton} className="dialog-close">
          <IconClose />
        </button>

        <div className="dialog-full-size">
          <img src={`/images/${currentImage.fullSize}`} alt={currentImage.text} />
          <button className="img-navigation" data-type="previous" onClick={previousImage}>
            <IconPrevious />
          </button>
          <button className="img-navigation" data-type="next" onClick={nextImage}>
            <IconNext />
          </button>
        </div>

        <div className="dialog-thumbnails">
          {images.map((p, i) => (
            <button
              key={i}
              className="dialog-thumbnail"
              data-active={dialogIndex === i}
              tabIndex={0}
              onClick={() => setDialogIndex(i)}
            >
              <img src={`/images/${p.thumbnail}`} alt={p.text} />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );

  return <>{dialog}</>;
}

export default Dialog;
