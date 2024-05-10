import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
      <h1>Explore our menu</h1>
      <p className='exploremenutext'>Select from an extensive menu that offers a mouthwatering selection of foods. Our goal is to fulfill your cravings.</p>
      <div className="exploremenu-list">
        {menu_list.map((item,i)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={i} className='exploremnu-list-item'>
                   <img className={category===item.menu_name?"active":""} src={item.menu_image} />
                   <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu