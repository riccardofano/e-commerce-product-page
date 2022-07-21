import { useEffect, useState } from "react";

// (min-width: 50em)
const desktopBreakpoint = 50;
const body = document.querySelector("body");

export const useViewport = (): { isDesktop: boolean } => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (body === null) return { isDesktop: false };
  const ems = parseFloat(getComputedStyle(body).fontSize);
  const isDesktop = width / ems > desktopBreakpoint;

  return { isDesktop };
};
