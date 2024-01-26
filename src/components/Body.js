import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST } from "../utils/configs";

const Body = () => {

  const [restaurantList,setRestaurantList] = useState([])

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);

    const json = await data.json()
    //optional chaining

    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  if (restaurantList.length===0){
    return <Shimmer/>
  }

  return (
    <div className="body container">
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

