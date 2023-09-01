import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";






const RestaurantMenu = () =>{

    

    const {resId} = useParams();
    const resMenu = useRestaurantMenu(resId);

    const [showIndex, SetShowIndex] = useState(null);

   
    
    if (resMenu === null) return <Shimmer/>;
            
    const {name,cuisines,areaName,costForTwoMessage,avgRating} = resMenu?.data?.cards[0]?.card?.card?.info;
    const {lastMileTravelString,deliveryTime} = resMenu?.data?.cards[0]?.card?.card?.info?.sla;
   
    const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const category = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) => cat.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(category);
    
    return(
        <div className="text-center">
            <h1 className="font-bold text-xl py-6">{name}</h1>
            <p className="font-semibold" >{cuisines.join(", ")}</p>
            <p className="font-semibold mb-10">{areaName}, {deliveryTime}mins</p>
            {/* Categories Accordian */}

            {category.map((category, index) =>{
                const isSectionExpanded = showIndex === index;
                return (
                <RestaurantCategory 
                key={category?.card?.card?.title}  
                data = {category.card.card}
                showItems={isSectionExpanded}
                SetShowIndex = {()=> SetShowIndex(isSectionExpanded ? null : index)} /> 
                )
            })}
           
            
            
            
        </div>
    )
}

export default RestaurantMenu;