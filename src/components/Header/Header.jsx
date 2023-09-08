import React from "react";
import logo from "../../assets/img/Logo.svg"
import pin from "../../assets/img/Pin.svg"
import login from "../../assets/img/Login.svg"
import {Link} from "react-router-dom";
import style from "./Header.module.css";
import Burger from "./Burger/Burger";


const Header = () => {
    return (

        <header className={style.header}>
            <div className={style.burger__inner}>
                <Burger/>
            </div>
            <div className={style.header__leftSection}>
                <div className={style.header__leftSection_logo}>
                    <img src={logo}/>
                </div>
            </div>
            <div className={style.nav__inner}>
                <div className={style.nav__inner_geo}>
                    <img src={pin}/><Link to="#">NY, Manhattan</Link>
                </div>

                <div className={style.nav__inner_search}>
                    <input type="text" placeholder="Track a Package"/>
                </div>
                <div className={style.nav__inner_link_items}>
                    <Link to="#" className={style.nav__inner_link_item}>Send a Parcel</Link>
                    <Link to="#" className={style.nav__inner_link_item}>Become a Courier</Link>
                    <Link to="#" className={style.nav__inner_link_login}>
                        <img src={login}/>
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Header;
