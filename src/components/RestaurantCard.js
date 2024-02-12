import { CDN_URL } from "../utils/configs";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, cloudinaryImageId,avgRating, sla} = resData?.info;
  
    return (
      <div className="hover:scale-105 transition duration-300 w-56 h-80 hover:bg-amber-600 hover:border-2 hover:border-amber-600 hover:cursor-pointer justify-center p-1 border-[1px]">
        <img src={CDN_URL + cloudinaryImageId} className="w-full max-h-32 object-cover" />
        <div className="">
        <div className="pt-3 text-xl">{name}</div>
        <div className="pt-3 text-sm ">{cuisines.join(", ")}</div>
        <div className="pt-3 text-sm">{avgRating} Stars</div>
        <div className="pt-3 text-sm">{sla?.slaString}</div>
        </div>
      </div>
    );
  };

export default RestaurantCard;