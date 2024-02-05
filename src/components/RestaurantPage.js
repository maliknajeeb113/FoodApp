import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
const RestaurantPage = () => {

    const [resInfo,setResInfo] = useState(null)

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=16073&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        setResInfo(json);
    }

    useEffect(()=>{
        fetchMenu()
    },[])

    // const name = resInfo?.data?.cards[0]?.card?.card?.info.name;
    const {name, cuisines} = resInfo?.data?.cards[0]?.card?.card?.info || {}

    return resInfo===null?<Shimmer/>:(
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Coffee</li>
            </ul>
        </div>
    )
}

export default RestaurantPage