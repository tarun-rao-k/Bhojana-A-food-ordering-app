import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import UserContext from "../Utilities/UserContext";
import { useSelector } from "react-redux";
const Header = ()=>{
    const[btn,setBtn]=useState("LogIn");
    const status = useOnlineStatus();
    const {name} = useContext(UserContext);

    const storeItems = useSelector((store)=>{return store.cart.item})
    console.log(storeItems);
    
    return(
        
        <div className="flex justify-around items-center border-b ">
            <div className="flex items-center">
            <img  src="https://st2.depositphotos.com/1496387/10676/v/450/depositphotos_106767710-stock-illustration-cook-chef-vector-logo-restaurant.jpg" alt="logo" className="h-28"/>
            <h1 className="text-4xl text-orange-600 font-extrabold">BHOJANA</h1>
            </div>
            
            <div>
            <ul className="flex">
                <li className="mx-3">Online:{status?"🟢":"🔴"}</li>
                <li className="mx-3 hover:text-orange-600 hover:underline"><Link to={"/"} className="links">Home</Link></li>
                <li className="mx-3  hover:text-orange-600 hover:underline"><Link to={"/grocery"} className="links">Grocery</Link></li>
                <li className="mx-3  hover:text-orange-600 hover:underline"><Link to={"/help"} className="links">Contact Us</Link></li>
                <li className="mx-3 font-semibold  hover:text-orange-600 hover:underline"><Link to={"/cart"}>Cart(items:{storeItems.length})</Link></li>
                <li className="mx-3  hover:text-orange-600 hover:underline shadow-md"><button className="bg-orange-600 text-white rounded-md w-20" onClick={()=>{
                    btn==="LogIn"?setBtn("LogOut"):setBtn("LogIn");
                }}>{btn}</button></li>
                <li className="mx-3">User:{name}</li>
            </ul>
            </div>
        </div>

    )
}

export default Header;