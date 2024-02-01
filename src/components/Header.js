import { useState } from "react";
import burger from "../../src/assets/burger.png";


const Header = () => {
    const [btnName,setBtnName] = useState("Login")


    return (
      
      <div className="container flex justify-between mx-auto p-5 border-2 items-center">
        <div className="">
          <span className="tracking-wide">Food</span><span className="bg-amber-600 p-[2px] text-black rounded-sm">Hub</span>
        </div>
        <div className="nav-items">
          <ul className="flex gap-10 items-center justify-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button className="rounded bg-amber-600 p-2 text-black" onClick={()=>btnName=="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button></li>
            
          </ul>
        </div>
      </div>
    );
  };

export default Header;