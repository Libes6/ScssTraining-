import React from 'react'
import style from "./Header.module.scss"
import {ShoppingCartOutlined} from '@ant-design/icons'
const Header = () => {
  return (
    <div className={style.headerWrapper}>

        <header className={style.header}>
            <div className={style.headerLogo}>
                <a className={style.headerLogoLink} href="/">
                    <h3><span>ALL</span> T-SHIRT</h3>
                    <span>order a t-shirt with a design</span>
                </a>
            </div>
            <a href='/' className={style.cartWrapper}>
                <p className={style.cartPrice}>520 $</p>
                <div className={style.cartBorder}></div>
                <div className={style.cartBasket}>
                  <ShoppingCartOutlined className={style.cartBasketIcon} />
                    <span>3</span>
                </div>
            </a>
        </header>
    </div>
  )
}

export default Header