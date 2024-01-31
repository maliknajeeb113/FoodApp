import burger from "../../src/assets/burger.png";


const Header = () => {
    return (
      <div className="container flex justify-between mx-auto p-5 border-2 items-center">
        <div className="logo-container w-10">
          <img src={burger} className="logo" />
        </div>
        <div className="nav-items">
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button className="rounded bg-amber-600 p-2">Login</button></li>
            
          </ul>
        </div>
      </div>
    );
  };

export default Header;