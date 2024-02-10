import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=312660&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;
  

  // const name = resInfo?.data?.cards[0]?.card?.card?.info.name;
    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info || {}

    return resInfo===null?<Shimmer/>:(
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <ul>
                 <li>{costForTwoMessage}</li>
            </ul>
        </div>
    )
}

export default RestaurantPage
