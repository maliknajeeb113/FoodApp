import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST } from "../utils/configs";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);

    const json = await data.json();
    //optional chaining
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between py-3">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="rounded text-black p-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="rounded bg-amber-600 px-4 text-black"
            onClick={() => {
              const filtered = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              );
              setRestaurantList(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="rounded bg-amber-600 px-4 text-black"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-6">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
