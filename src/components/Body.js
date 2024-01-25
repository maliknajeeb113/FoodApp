import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock";
import { useState } from "react";

const Body = () => {

  const [restaurantList,setRestaurantList] = useState(resList)

  return (
    <div className="body m-5 ">
      <div className="filter p-5">
        <button
          className="rounded bg-amber-600 p-2"
          onClick={() => {

            const filteredList = restaurantList.filter(res=>res.info.avgRating>4)
            setRestaurantList(filteredList)
            
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container flex flex-wrap justify-center">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

