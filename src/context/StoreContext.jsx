import { createContext,  useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext=createContext(null)

const Storecontextprovider=(props)=>{
    const [cartitems,setCartitems]=useState({});
    const addtocart=(itemid)=>{
        if(!cartitems[itemid]){
            setCartitems((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setCartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    };
    const removefromcart=(itemid)=>{
       setCartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    };
    const gettotal=()=>{
        let total=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo=food_list.find((product)=>product._id===item);
                total+=iteminfo.price*cartitems[item];
            }
        }
        return total;
    }
const contextvalue={
 food_list,cartitems,setCartitems,addtocart,removefromcart,gettotal
}
return(
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
)
}
export default Storecontextprovider