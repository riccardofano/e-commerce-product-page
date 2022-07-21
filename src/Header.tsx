import Nav from "./Nav";

function Header() {
  return (
    <header className="container flex flex-center">
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
