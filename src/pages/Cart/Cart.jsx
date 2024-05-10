import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
const Cart = () => {
  const { cartitems, food_list, removefromcart,gettotal } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cartitems">
        <div className="cartitems-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, i) => {
            if (cartitems[item._id] > 0) {
              return (
                <div>
                  <div key='i' className="cartitems-title cart-item">
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>₹{item.price * cartitems[item._id]}</p>
                    <p onClick={() => removefromcart(item._id)} className='cross'>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })
        }

      </div>
      <div className="car-bottom">
        <div className="carttotal">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{gettotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>₹{gettotal()+50}</b>
            </div>
          </div>
  
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart