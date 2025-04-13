import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import paymentContext from "../Utilities/paymentContext";

const PaymentPage = (props)=>{
    const [optionclicked,setOptionClicked]= useState("");
    const {cost} = useContext(paymentContext);

    return(
    <div className="border-2 border-orange-600 mx-96 rounded-2xl mt-4">
            <h1 className="text-4xl text-center font-bold py-2">Choose your payment method</h1>
            <h1 className="text-3xl text-center pb-2">Total payable:<span className="font-bold"> ₹{cost}</span></h1>
        <div className="flex flex-col">
            <label className="text-2xl pl-2">
                Credit Card
                <input type="radio" value="creditCard" checked={optionclicked==="creditCard"} onChange={(event)=>{setOptionClicked(event.target.value)}} className="ml-2"/>
            </label>
            <label className="text-2xl pl-2">
                UPI
                <input type="radio" value="upi" checked={optionclicked==="upi"} onChange={(event)=>{setOptionClicked(event.target.value)}} className="ml-2"/>
            </label>
            <label className="text-2xl pl-2">
                Cash on delivery
                <input type="radio" value="cash" checked={optionclicked==="cash"} onChange={(event)=>{setOptionClicked(event.target.value)}} className="ml-2"/>
            </label>
        </div>
            <div className="flex items-center justify-center mt-3">
                <Link to={"/cart"}><button className="bg-black text-white mr-2 px-2 text-xl rounded-md">Go to cart</button></Link>
                <Link to={"/"}><button className="bg-black text-white px-2 text-xl rounded-md">Add more</button></Link>
                
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-green-600 my-3 text-2xl px-2 rounded-md text-white">Place Order</button>
            </div>
            
    </div>

    )
}

export default PaymentPage;
