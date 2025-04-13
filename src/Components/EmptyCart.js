import { Link } from "react-router-dom";

const EmptyCart = ()=>{
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-center pt-6 font-extrabold text-orange-600 text-3xl">Your cart is empty </h1>
            <button className="bg-orange-600 text-white px-2 rounded-md mt-4"><Link to={"/"}>Click to start ordering</Link></button>
        </div>
    )
}

export default EmptyCart;