'use client'

import Link from "next/link";
import Image from "next/image";

import classes from './shop-item.module.css';
import { useContext } from "react";
import CartContext from "@/src/store/CartContext";
import { currencyFormatter } from "@/src/util/formatting";
import Button from "../UI/button";
import UserProgressContext from "@/src/store/UserProgressContext";

export default function ShopItem({ item }) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    function handleAddItemToCart() {
        cartCtx.addItem(item);
    }

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    function mainFunction() {
        handleAddItemToCart();
        handleShowCart();
    }

    return (
        <article className={classes.item}>
            <header className={classes.header}>
                <Link href={`/shop/${item.slug}`}>
                    <div className={classes.headerText}>
                        <h3 className={classes.name}>{item.name}</h3>
                    </div>
                    <Image className={classes.itemImg} src={item.image} alt={item.name} width={500} height={600}/>
                    
                </Link>
                
            </header>
            <div className={classes.content}>
                <div className={classes.price}>
                    <p>{currencyFormatter.format(item.price)}</p>
                </div>
                <div className={classes.actions}>
                    <Button onClick={mainFunction}>ADD TO CART</Button>
                </div>
            </div>
        </article>
    )
}