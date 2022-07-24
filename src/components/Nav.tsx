import { useState } from "react";
import { useViewport } from "../hooks/useViewport";

function Nav() {
  const { isDesktop } = useViewport();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const NavigationToggleButton = () => (
    <button className="button" onClick={toggleOpen}>
      {isOpen ? (
        <img src="/images/icon-close.svg" alt="Close navigation" />
      ) : (
        <img src="/images/icon-menu.svg" alt="Open navigation" />
      )}
    </button>
  );

  return (
    <nav className="nav">
      {!isDesktop && <NavigationToggleButton />}

      {(isDesktop || isOpen) && (
        <>
          <ul className="flex flex-gap bg-neutral-100">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="overlay"></div>
        </>
      )}
    </nav>
  );
}

export default Nav;
