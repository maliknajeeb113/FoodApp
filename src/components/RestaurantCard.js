import { CDN_URL } from "../utils/configs";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, cloudinaryImageId,avgRating, sla} = resData?.info;
  
    return (
      <div className="res-card w-56 hover:border-2 hover:cursor-pointer justify-center p-1 m-2">
        <img src={CDN_URL + cloudinaryImageId} className="w-full max-h-32 object-cover" />
        <h2 className="pt-3 text-xl">{name}</h2>
        <h4 className="pt-3 text-sm">{cuisines.join(", ")}</h4>
        <h4 className="pt-3 text-sm">{avgRating} Stars</h4>
        <h4 className="pt-3 text-sm">{sla.slaString}</h4>
      </div>
    );
  };

export default RestaurantCard;