import React from 'react'
import style from "./Content.module.scss"
import Cart from './Cart'
const Content = () => {
  return (
    <div className={style.ContentWrapper}>
        <div className={style.Content}>
            <h2>Chose</h2>
            <div className={style.CartItem}>
               <Cart/> 
               <Cart/> 
               <Cart/> 
               <Cart/> 
               {[...new Array(15)].map(()=><Cart/>)}
            </div>
        </div>

    </div>
  )
}

export default Content