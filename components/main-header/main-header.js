'use client'

import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/LakeshoreCoffeeNoBackground.png';
import cartImg from '@/assets/Cart.png';
import classes from './main-header.module.css'
import NavLink from './nav-link';
import { useContext } from 'react';
import CartContext from '@/src/store/CartContext';

export default function MainHeader() {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <>
        <header className={classes.header}>
            <div className={classes.logoContainer}>
                <h1>
                    <Link className={classes.logo} href="/">
                        <Image className={classes.img} src={logoImg} alt="Lakeshore Coffee logo" priority/>
                    </Link>
                </h1>
            </div>
            
            <div className={classes.mainMenu}>
                <nav className={classes.nav}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <NavLink href="/menu">Menu</NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink href="/shop">Shop</NavLink>
                        </li>
                        <li className={classes.li}>
                            <NavLink href="/contact">Contact</NavLink>
                        </li>
                        <li className={classes.li}>   
                            <NavLink className={classes.headerIcon} href="/cart" >
                                    <Image className={classes.icon} src={cartImg} alt="Cart" />
                                    Cart ({totalCartItems})
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
            
        
    );
}