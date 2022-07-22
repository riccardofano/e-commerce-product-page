import Nav from "./Nav";

function Header() {
  return (
    <header className="header | container flex flex-v-center flex-sb">
      <div className="flow-h | flex flex-v-center">
        <img src="images/logo.svg" alt="Sneakers logo" />
        <Nav />
      </div>
      <div className="flow-h | flex flex-v-center max-100">
        <img src="images/icon-cart.svg" alt="Shopping cart" />
        <div className="img-wrapper">
          <img src="images/image-avatar.png" alt="Profile avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
