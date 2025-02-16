'use client'

import Image from 'next/image';

import hamburgerImg from '@/assets/HamburgerMenu.svg';
import hamburgerCloseImg from '@/assets/HamburgerMenuCloseGrey.svg';
import cartImg from '@/assets/Cart.png';
import classes from './sidebar.module.css'
import NavLink from '../main-header/nav-link';
import { useContext, useState } from 'react';
import CartContext from '@/src/store/CartContext';

export default function Sidebar() {
    const cartCtx = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleToggle() {
        setIsOpen(!isOpen);

    };

    return (
        <>
            <div onClick={handleToggle} className={!isOpen ? classes.pageOverlay : classes.pageOverlayVisible}></div>
            <div className={classes.sidebar}>
                <div className={`${classes.hamburgerMenu} ${isOpen ? classes.dnone : ''}`} onClick={handleToggle}>
                    <Image className={classes.hamburgerMenuImg} src={hamburgerImg} alt="Menu"/>
                </div>
                <div className={`${classes.hamburgerMenuClose} ${isOpen ? '' : classes.dnone}`} onClick={handleToggle}>
                    <Image className={classes.hamburgerMenuCloseImg} src={hamburgerCloseImg} alt="Menu Close"/>
                </div>
                <div className={`${classes.smallMenu} ${isOpen ? classes.smallMenuActive : ''}`}>
                    <nav className={classes.nav}>
                        <ul className={classes.ul}>
                            <li className={classes.li} onClick={handleToggle}>
                                <NavLink href="/menu" className={classes.navLink}>Menu</NavLink>
                            </li>
                            <hr className={classes.hr}/>
                            <li className={classes.li} onClick={handleToggle}>
                                <NavLink href="/shop" className={classes.navLink}>Shop</NavLink>
                            </li>
                            <hr className={classes.hr}/>
                            <li className={classes.li} onClick={handleToggle}>
                                <NavLink href="/contact" className={classes.navLink} >Contact</NavLink>
                            </li>
                            <hr className={classes.hr}/>
                            <li className={classes.li} onClick={handleToggle}>   
                                <NavLink className={classes.navLink} href="/cart" >
                                        <Image className={classes.icon} src={cartImg} alt="Cart" />
                                        Cart ({totalCartItems})
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
            
        
    );
}