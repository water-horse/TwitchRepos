import React from 'react'
import SingleMenuItem from './SingleMenuItem.js'
import { Menu } from 'antd'

function MenuItems({ items, favoriteOnChange }) {
  return items.map((item) => (
    <Menu.Item key={item.id}>
      <SingleMenuItem item={item} favOnChange={favoriteOnChange}/>
    </Menu.Item>
  ))
}

export default MenuItems