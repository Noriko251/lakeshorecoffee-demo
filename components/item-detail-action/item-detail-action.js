'use client'

import CartContext from "@/src/store/CartContext";
import { useContext, useState } from "react";
import Button from "../UI/button";
import classes from "./item-detail-action.module.css"
import Link from "next/link";

export default function ItemDetailAction ({item}) {
    const cartCtx = useContext(CartContext);

    const [itemQuantity, setItemQuantity] = useState(1)

    function increaseQuantity() {
        setItemQuantity(itemQuantity + 1);
    }

    function decreaseQuantity() {
        if (itemQuantity === 1) {
            setItemQuantity(1);
        } else {
            setItemQuantity(itemQuantity - 1);
        }
    }

    return (
        <>
            <div className={classes.itemDetailAction}>
                <button type="button" onClick={decreaseQuantity}>-</button>
                    <span>{itemQuantity}</span>
                <button type="button" onClick={increaseQuantity}>+</button>
            </div>
            <div className={classes.itemDetailAdd}>
                <Link className={classes.cartLink} href="/cart">
                    <Button onClick={() => cartCtx.addUpItem({item, itemQuantity})}>ADD TO CART</Button>
                </Link>
            </div>
        </>
    )

}