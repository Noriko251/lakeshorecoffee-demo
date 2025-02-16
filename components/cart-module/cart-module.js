'use client'

import { useContext } from "react";

import Modal from "../UI/modal";
import CartContext from "@/src/store/CartContext";
import UserProgressContext from "@/src/store/UserProgressContext";
import { currencyFormatter } from "@/src/util/formatting";
import CartItem from "./cart-item";
import classes from "./cart.module.css";
import Button from "../UI/button";
import Link from "next/link";

export default function CartModule() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }


    return (
        <Modal 
            className={classes.cart} 
            open={userProgressCtx.progress === 'cart'} 
            onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null} >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id}
                    image={item.image}
                    name={item.name} 
                    quantity={item.quantity} 
                    price={item.price} 
                    subtotal={item.price * item.quantity}
                    slug={item.slug}
                    onIncrease={() => cartCtx.addItem(item)}
                    onDecrease={() => cartCtx.removeItem(item.id)}
                    deleteItem={() => cartCtx.deleteItem(item.id)}
                />
                ))}
            </ul>
            {/* <p>{cartCtx.items.slug}</p> */}
            <p className={classes.cartTotal}>Total: {currencyFormatter.format(cartTotal)}</p>
            <p className={classes.modalActions}>
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && (
                    <Link href="/checkout"><Button onClick={handleCloseCart} >Go to Checkout</Button></Link>
                )} 
            </p>
        </Modal>
    )
}