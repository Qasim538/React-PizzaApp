import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItems from '../components/MenuItems'
import '../styles/Menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1> 
        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return <div> 
                    <MenuItems 
                    key={key}
                    image={menuItem.image} name={menuItem.name} price={menuItem.price} />
                </div>
            })}
        </div>     
    </div>
  )
}

export default Menu
