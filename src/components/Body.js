import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock";

const Body = () => {
  return (
    <div className="body m-5 ">
      <div className="filter p-5">
        <button
          className="rounded bg-amber-600 p-2"
          onClick={() => {
            console.log("click");
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restaurant-container flex flex-wrap justify-center">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

