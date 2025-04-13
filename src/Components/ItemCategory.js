import { useState } from "react";
import DisplayItems from "./DisplayItems";

const ItemCategory = (props)=>{
  const {data, allDish, setEachSectionIndex} = props;
  const descriptionList = data?.card?.card?.itemCards;
   
//    const[allDish,setAllDish] = useState(false);
   
   const showAllDishes = ()=>{
    setEachSectionIndex();
   } 
    return(
        <div className="bg-slate-100  mx-72  rounded-lg  mb-1 pb-2">
            <div className="">
                <div className="flex  justify-between h-12 items-center" onClick={showAllDishes}>
                <h3 className="pl-2">{data?.card?.card?.title} ({descriptionList.length})</h3>   
                <h2 className="pr-2">▼</h2> 
                </div>
                
                {allDish && descriptionList?.map((eachItem,index)=>{
                return(
                    <DisplayItems key={index} eachItem ={eachItem}/>  
                )
            })}
        
            </div>  
        </div>
    )
}

export default ItemCategory;