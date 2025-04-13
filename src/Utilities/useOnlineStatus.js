import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineState,useOnlineState] = useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            useOnlineState(false);
        });
    
        window.addEventListener("online",()=>{
            useOnlineState(true);
        });
    },[]);

    return onlineState;

    
}
export default useOnlineStatus;