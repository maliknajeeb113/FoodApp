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
  const { name, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="text-4xl font-bold">{name}</div>
      <div>{cuisines.join(", ")}</div>
      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
