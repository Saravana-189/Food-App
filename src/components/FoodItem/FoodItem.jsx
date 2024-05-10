import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {
    
    const {cartitems,addtocart,removefromcart}=useContext(StoreContext);
  return (
    <div className='fooditem'>
      <div className="fooditem-container">
        <img className='fooditem-image' src={image} alt='' />
        {
            !cartitems[id]?<img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white}/>:
            <div className="fooditem-count">
                <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red}/>
                <p>{cartitems[id]}</p>
                <img onClick={()=>addtocart(id)} src={assets.add_icon_green}/>
            </div>

        }
      </div>
      <div className="fooditem-info">
        <div className="fooditem-rating">
            <p>{name}</p>
            <img src={assets.rating_starts}/>
        </div>
        <p className="fooditem-description">{description}</p>
        <p className="fooditem-price">₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem