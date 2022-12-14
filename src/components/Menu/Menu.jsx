import React from 'react'
import style from "./Menu.module.scss"
import {UpOutlined} from '@ant-design/icons'
const Menu = () => {
 const  isActive =true;
  return (
    <div className={style.MenuWrapper}>
        <div className={style.Menu}>
            <div className={style.MenuItems}>
                <ul>
                    <li >All</li>
                    <li className="active">Man`s</li>
                    <li>Female</li>
                    <li>Children</li>
                    <li>Box</li>
                    <li>Accessories</li>

                    
                </ul>
            </div>
            <div className={style.MenuSort}>
            <UpOutlined />
              <p> Сортировка по: </p>
              <span> Популярности</span>
            </div>
        </div>
    </div>
  )
}

export default Menu