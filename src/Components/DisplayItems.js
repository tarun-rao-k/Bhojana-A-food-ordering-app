import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/cartSlice";

const DisplayItems = (props)=>{
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    const {eachItem} = props;
    // const [qtyCount,setQtyCount] = useState(0);
    const dispatchAddItem = useDispatch();
    const addItemToCart =(eachItem)=>{
        dispatchAddItem(addItem(eachItem));
    }

    return(
        <div  className="bg-slate-100 border-b-2 flex items-center mx-2 py-2">
                        <div className="inline-block w-3/4 pl-2">  
                            <p className="font-bold text-xl mb-2">{eachItem?.card?.info?.name}</p>
                            <p  className="mb-2 text-xs">{eachItem?.card?.info?.description}</p>
                            <p>₹{(eachItem?.card?.info?.defaultPrice)/100||(eachItem?.card?.info?.price)/100}</p>
                        </div> 
                        <div className="inline-block w-40">
                            <img src={url+eachItem?.card?.info?.imageId} className="h-28  object-cover rounded-lg w-full"/>
                        </div> 
                        <div className="ml-2">
                            <button className=" bg-green-600 text-white rounded-md px-2" onClick={()=>addItemToCart(eachItem)}>ADD</button>
                        </div>
                    </div>
                    
    )
}
export default DisplayItems;