import { useState } from "react";
import { useViewport } from "./hooks/useViewport";

function Nav() {
  const { isDesktop } = useViewport();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {!isDesktop && (
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src="/images/icon-close.svg" alt="Close menu" />
          ) : (
            <img src="/images/icon-menu.svg" alt="Open menu" />
          )}
        </button>
      )}
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
