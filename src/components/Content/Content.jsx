import React from 'react'
import style from "./Content.module.scss"
import Cart from './Cart'
const Content = () => {
  return (
    <div className={style.ContentWrapper}>
        <div className={style.Content}>
            <h2>Chose</h2>
            <div className={style.CartItem}>
           
               {[...new Array(15)].map(()=><Cart img='http://placeimg.com/640/480/fashion'/>)}
            </div>
        </div>

    </div>
  )
}

export default Content