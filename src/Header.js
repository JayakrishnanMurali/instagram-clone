import React from 'react'
import './Header.css'
import { AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { VscHome } from 'react-icons/vsc'

function Header() {
    return (
        <div className="header">
            <div className="header__container">

                <img 
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                alt="Instagram Logo" 
                className="header__logo" />

                <input
                placeholder="Search"
                type="text"
                  />

                <div className="header__options">

                    <VscHome className="header__navMenu" />
                    <RiMessengerLine className="header__navMenu"/>
                    <AiOutlineCompass className="header__navMenu"/>
                    <AiOutlineHeart className="header__navMenu"/>
                    {/* AVATAR */}

                    <img 
                    className="header__profile"
                    src="https://api.time.com/wp-content/uploads/2016/10/zayn-malik-one-direction-anxiety-book.jpg?w=824&quality=70" 
                    alt="" 
                    />

                </div>

            </div>
        </div>
    )
}

export default Header
