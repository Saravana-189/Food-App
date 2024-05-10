import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setLogin}) => {
    const [curr,setCurr]=useState("Sign Up")
  return (
    <div className='loginpopup'>
        <form className="loginpopup-container">
             <div className="loginpopup-title">
                <h2>{curr}</h2>
                <img onClick={()=>setLogin(false)}src={assets.cross_icon}/>
             </div>
             <div className="loginpopup-input">
                {curr==='Login'?<></>:<input type='text' placeholder='Enter your name' required/>}
                <input type='email' placeholder='Enter your email' required/>
                <input type='password' placeholder='Enter password' required/>
             </div>
             <button>{curr==='Sign Up'?"Create account":"Login"}</button>
             <div className="loginpopup-condition">
                <input type='checkbox' required/>
                <p>By continuing, I agree tp the terms and policy</p>
             </div>
             {curr==='Login'?<p>Create a new account? <span onClick={()=>setCurr("Sign Up")}>CLick Here</span></p>:
             <p>Already have an account <span onClick={()=>setCurr("Login")}>Login Here</span></p>
             }
            
        </form>
    </div>
  )
}

export default Loginpopup