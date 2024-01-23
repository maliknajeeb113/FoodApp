import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../FoodApp/burger.png";

/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurentCard
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header flex justify-between m-5 border-2 items-center">
      <div className="logo-container w-10">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const Body = () => {
    return(<div>
        
    </div>)
}


const App = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
