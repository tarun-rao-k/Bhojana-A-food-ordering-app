const RestCards =(props)=>{
    const{restData}=props;
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return(
        <div className="restCards">
            <img src={url+restData.info.cloudinaryImageId} className="h-56 w-full object-cover rounded-3xl"/>
            <h2 className="text-xl font-bold truncate pl-2">{restData.info.name}</h2>
            <h3 className="truncate pl-2" >{restData.info.cuisines.join(', ')}</h3>
            <h3 className="pl-2">★{restData.info.avgRating}</h3>
            <h3 className="inline-block mr-2 pl-2">{restData.info.costForTwo}</h3>
            <h3 className="inline-block pl-2">•{restData.info.sla.slaString}</h3>
        </div>
    )
}

export default RestCards;

 export const TopRatedRestaurants = (RestCards)=>{
    return (props)=>{
        return(
           
                <div >
                <RestCards {...props} />
                <label  className="bg-green-600 px-2 text-white rounded-md ml-2">Most liked</label>
            </div>
            
        )
    }
}