import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='fooddisplay'>
      <h2>Top foods available nearby</h2>
      <div className="fooddisplay-list">
        {
            food_list.map((item,i)=>{
              if(category==='All'||category===item.category){
                return(
                  <FoodItem key={i} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}
                  />
             )
              }
               
            })
        }
      </div>
    </div>
  )
}

export default FoodDisplay