import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import paymentContext from "../Utilities/paymentContext.js";

const Bill = ()=>{
    let itemCount = 0;
    let totalBill = 0;
    const storeItems = useSelector((store)=>{return store.cart.item});
    const {setTotalBill}=useContext(paymentContext);

    storeItems?.map((eachItem)=>{
         totalBill = totalBill+ ((eachItem?.card?.info?.defaultPrice)/100||(eachItem?.card?.info?.price)/100);
         itemCount=itemCount+1;
          
    })
    useEffect(() => {
        setTotalBill(Number(totalBill.toFixed(2)));
      }, [totalBill]);
        return(
            
            <div className=" border-2 border-orange-600 rounded-md flex
            flex-col items-center pb-2 mx-96 mb-4">
                <h1 className="text-orange-600 font-bold text-2xl">Total Payable: <span className="text-black"> ₹{Number(totalBill.toFixed(2))}</span></h1>
                <h1 className="text-orange-600 font-bold">Qty: <span className="text-black font-bold" >{itemCount}</span></h1>
                <Link to={"/payment"}><button className=" font-bold bg-green-600 text-white px-2 rounded-md mt-2 text-xl">Proceed to payment</button></Link>
            </div>
            
        )
        
    
}
export default Bill;