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
 *      - Image
 *      - Name of restaurant, Stars, cuisine, delivery ETA
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header flex justify-between m-5 p-5 border-2 items-center">
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
};

const RestaurantCard =()=>{

    return(
        <div className="res-card w-48 hover:border-2 hover:cursor-pointer justify-center p-1 m-2">

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/omcn5pdlhv3owikgjvxh" className="w-full"/>
            <h2 className="pt-3 text-xl">NaanCha</h2>
            <h4 className="pt-3">Naan, Chole Bhature, Lassi</h4>
            <h4 className="pt-3">4.4 Stars</h4>
            <h4 className="pt-3">30 minutes</h4>

        </div>
    )

}

const Body = () => {
  return (
  <div className="body m-5">
    <div className="search p-5">
        Search
    </div>
    <div className="restaurant-container flex flex-wrap">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>

  </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
