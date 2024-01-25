import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {

  const [restaurantList,setRestaurantList] = useState([])

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.7266016&lng=74.8570259&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()
    //optional chaining
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // setRestaurantList(json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

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

