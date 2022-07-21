import Nav from "./Nav";

function Header() {
  return (
    <header>
      <img src="images/logo.svg" alt="Sneakers logo" />
      <Nav />
      <div>
        <img src="images/icon-cart.svg" alt="Shopping cart" />
        <img src="images/image-avatar.png" alt="Profile avatar" />
      </div>
    </header>
  );
}

export default Header;
