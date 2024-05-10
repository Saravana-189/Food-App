import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setLogin}) => {
    const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbarmenu">
        <Link to='/'onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>HOME</Link>
        <a href='#exploremenu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>MENU</a>
        <a href='#appdownload' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>MOBILE-APP</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
        </div>
        <button onClick={()=>setLogin(true)}>SIGN IN</button>
      </div>
    </div>
  )
}

export default Navbar