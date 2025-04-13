import React, { lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Help from "./Components/Help.js";
import Error from "./Components/Error.js";
import { Outlet } from "react-router-dom";
import Menu from "./Components/Menu.js";
import { Suspense } from "react";
import UserContext from "./Utilities/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./Utilities/appStore.js";
import Cart from "./Components/Cart.js";
import PaymentPage from "./Components/PaymentPage.js";
import paymentContext from "./Utilities/paymentContext.js";
// import Grocery from "./Components/Grocery.js";


const Outer = ()=>{
    const userName ="Tarun";
    const [totalBill,setTotalBill] = useState(0);
    return (
        <paymentContext.Provider value={ {setTotalBill,cost:totalBill}}>
        <Provider store={appStore}>
        <UserContext.Provider value={{name:userName}}>
        <div className="outer">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
        </paymentContext.Provider>
    )
}

const Grocery = lazy(()=>{return import("./Components/Grocery.js");});
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Outer/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>,

            },
            
            {
                path:"/help",
                element:<Help/>,
                errorElement:<Error/>,
            },
            {
                path:"/restaurantsMenu/:id",
                element:<Menu/>,
                errorElement:<Error/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense>,
                // element:<Grocery/>,
                
            },
            {
                path:"/cart",
                element:<Cart/>,
                errorElement:<Error/>,
            },
            {
                path:"/payment",
                element:<PaymentPage/>,
                errorElement:<Error/>,
            },
            
        ],
        errorElement:<Error/>,
    },
    
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);