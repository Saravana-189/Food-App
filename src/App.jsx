import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'

const App = () => {
  const [login,setLogin]=useState(false);
  return (
    <>
    {login?<Loginpopup setLogin={setLogin}/>:<></>}
    <div className='app'>
      <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App