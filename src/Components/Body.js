import RestCards from "./RestCards";
import restList from "../Utilities/mockData.js";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Shrimmer from "./Shrimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus.js";
import { TopRatedRestaurants } from "./RestCards";
import UserContext from "../Utilities/UserContext.js";

const Body = ()=>{
    const [resList,setRestList]= useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [searchValue,setSearchValue]=useState("");

    const RatingMoreThanFive = TopRatedRestaurants(RestCards);
    const {name,setUserName} = useContext(UserContext);
    

    useEffect(()=>{
      fetchData();  
    },[]);

    const fetchData =async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =  await data.json();
        console.log(json)
        setRestList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setAllRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    const state = useOnlineStatus();
    if(state===false){
        return (<h1>you are offline</h1>);
    } 
  
    if(resList.length===0){
        return(<Shrimmer/>);
    }
    return (
        <div className="">
            <h1 className="text-center text-2xl my-2 font-bold">Hi {name} welcome back!</h1>
            <div className="flex justify-center mt-4">
                <button className="border border-black px-2 rounded-md bg-slate-100 mr-2 text-orange-600 font-semibold shadow-md" onClick={()=>{
                    const filteredResList = allRestaurants.filter((cards)=>{
                         return cards.info.avgRating > 4.3;  
                    });
                    setRestList(filteredResList);
                }}>Top Rated Restaurants</button>
                <button className="border border-black px-2 rounded-md bg-slate-100 mr-44 text-orange-600 font-semibold shadow-md" onClick={()=>{
                    setRestList(allRestaurants);
                }}>Show All Restaurants</button>
                {/* <input type="textbox" value={name} onChange={(event)=>{
                    setUserName(event.target.value)
                }}/> */}
                <input type="textbox" className="border border-black rounded-md px-2 mr-1 ml-48 w-64 shadow-md" placeholder="Search restaurants here" value={searchValue} onChange={(e)=>{
                    setSearchValue(e.target.value)
                }}></input>
                <button className="border border-black px-2 rounded-md bg-slate-100 text-orange-600 font-semibold shadow-md" onClick={()=>{
                    const searchList = allRestaurants.filter((res)=>{
                        return res.info.name.toUpperCase().includes(searchValue.toUpperCase());   
                    })
                    setRestList(searchList);
                } }>Search</button>
            
            </div>
            <div className="mt-8 grid grid-cols-3 gap-x-8 gap-y-8 px-28">
                {
                   resList.map((restaurants)=>{
                        return(
                            <Link className="cards" key = {restaurants.info.id} to={"/restaurantsMenu/"+restaurants.info.id}>{restaurants?.info?.avgRating >4.5 ?<RatingMoreThanFive restData = {restaurants} />:<RestCards  restData = {restaurants}/>}</Link>
                        )
                   }) 
                }
                
            </div>
        </div>
        
    )

}

export default Body;