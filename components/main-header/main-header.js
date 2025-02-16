'use client'

import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/LakeshoreCoffeeNoBackground.png';
// import hamburgerImg from '@/assets/HamburgerMenu.svg';
// import hamburgerCloseImg from '@/assets/HamburgerMenuCloseGrey.svg';
import cartImg from '@/assets/Cart.png';
import classes from './main-header.module.css'
import NavLink from './nav-link';
import { useContext } from 'react';
import CartContext from '@/src/store/CartContext';
// import UserProgressContext from '@/src/store/UserProgressContext';

export default function MainHeader() {
    const cartCtx = useContext(CartContext);
    // const userProgressCtx = useContext(UserProgressContext);
    // const [isOpen, setIsOpen] = useState(false);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    // function handleToggle() {
    //     setIsOpen(!isOpen);

    // };

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
        {/* <div className={classes.sidebar}>
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
                            <NavLink href="/menu" >Menu</NavLink>
                        </li>
                        <hr className={classes.hr}/>
                        <li className={classes.li} onClick={handleToggle}>
                            <NavLink href="/shop">Shop</NavLink>
                        </li>
                        <hr className={classes.hr}/>
                        <li className={classes.li} onClick={handleToggle}>
                            <NavLink href="/contact" >Contact</NavLink>
                        </li>
                        <hr className={classes.hr}/>
                        <li className={classes.li} onClick={handleToggle}>   
                            <NavLink className={classes.headerIcon} href="/cart" >
                                    <Image className={classes.icon} src={cartImg} alt="Cart" />
                                    Cart ({totalCartItems})
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div> */}
        </>
            
        
    );
}