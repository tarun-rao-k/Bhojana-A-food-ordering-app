import { useEffect, useState } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shrimmer from "./Shrimmer";
import ItemCategory from "./ItemCategory.js"

const Menu = ()=>{
    const[menuItems,setMenuItems]=useState([]);
    const{id} = useParams();
    const [eachSectionIndex,setEachSectionIndex] = useState(); 


   
    useEffect(()=>{
        menuList();
    },[])
    const api_url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="
    const menuList = async()=>{
        const data = await fetch(api_url+id);
        const json = await data.json();
        setMenuItems(json.data.cards)   
    }
    const data = menuItems[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(data);

    const filteredCategoryForTitleAndBody = data?.filter((category)=>{
        return category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
     console.log(filteredCategoryForTitleAndBody);
     
    return(
        <div>
            <div className="heading">
                <h1 className="text-center text-2xl font-bold">{menuItems[0]?.card?.card?.text}</h1>
                <h2 className="text-center text-xl">★{menuItems[2]?.card?.card?.info?.avgRating}</h2>
                <h2 className="text-center">{menuItems[2]?.card?.card?.info?.costForTwoMessage}</h2>
            </div>
            {filteredCategoryForTitleAndBody?.map((item,index)=>{
                return <ItemCategory data={item} key={index} setEachSectionIndex ={() =>
                    setEachSectionIndex(eachSectionIndex === index ? null : index)} allDish={eachSectionIndex===index?true:false} />
            })}
            
        </div>
        
    )
}
export default Menu;    