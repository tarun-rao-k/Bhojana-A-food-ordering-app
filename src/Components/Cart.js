import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Utilities/cartSlice";
import EmptyCart from "./EmptyCart";
import Bill from "./Bill";


const Cart = ()=>{

const storeItems = useSelector((store)=>{return store.cart.item});
 const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

 const dispatchRemoveItem = useDispatch();
 const dispatchClearItem = useDispatch();

 const rItem = (index)=>{
    dispatchRemoveItem(removeItem(index))
 }
 
 const clearItems = ()=>{
    dispatchClearItem(clearCart())
 }

if(storeItems.length == 0){
    return <EmptyCart/>;
}
    return(
        <div>
            <div className="flex flex-col items-center">
            <h1 className="text-center text-2xl font-bold my-2"> Your Cart</h1>
            <button onClick={clearItems} className="bg-black text-white w-20 mb-2 rounded-md">Clear Cart</button>
            </div>
            {
                storeItems?.map((eachItem,index)=>{
                    return(
                        <div  className="bg-slate-100 mb-2 flex items-center py-2 mx-56 rounded-lg" key={index}>
                        
                        <div className="inline-block w-3/4 pl-2">    
                            <p className="font-bold text-xl mb-2">{eachItem?.card?.info?.name}</p>
                            <p className="mb-2 text-xs">{eachItem?.card?.info?.description}</p>
                            <p>₹{(eachItem?.card?.info?.defaultPrice)/100||(eachItem?.card?.info?.price)/100}</p>
                        </div>  
                        <div className="inline-block w-40">
                            <img src={url+eachItem?.card?.info?.imageId} className="h-28  object-cover rounded-lg w-full"/>
                        </div>  
                        
                        <div className="mx-2">
                            <button className=" bg-red-700 text-white rounded-md px-2" onClick={()=>rItem(index)}>REMOVE</button>
                        </div>
                    </div>
                    )
                })
            }
            <Bill/>
        </div>
    ) 
}

export default Cart;