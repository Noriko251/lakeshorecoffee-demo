'use client'

import { useContext } from "react";
import CartContext from "@/src/store/CartContext";
import { currencyFormatter } from "@/src/util/formatting";
import Button from "@/components/UI/button";
import classes from "./page.module.css";
import CartItem from "@/components/cart-module/cart-item";
import Link from "next/link";
import Image from "next/image";
import Arrow from '@/assets/ArrowLightBlue.png'


export default function Cart() {
    const cartCtx = useContext(CartContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    return(
            <>
                {cartCtx.items.length > 0 ? 
                    <div className={classes.cartWrapper}>
                        <header className={classes.header}>
                            <h2>Cart</h2>
                        </header>
                        
                        <div className={classes.cartContent}>
                            <div className={classes.columnHeader}>
                                <p className={classes.columnHeaderItems}>Items</p>
                                <p className={classes.columnHeaderSubtotal}>Subtotal</p>
                            </div>
                            <hr/>
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
                            <hr/>
                            <div>
                                <p className={classes.cartTotal}>Total: {currencyFormatter.format(cartTotal)}</p>
                            </div>       
                        </div>                        

                        <p className={classes.cartActions}>
                            <Link href="/shop" className={classes.backToShopLink}>
                                <Image className={classes.arrow} 
                                    src={Arrow} alt='Back to cart'
                                    width={40} height={40}/>
                                <Button type="button" textOnly >Go back to Shop</Button>
                            </Link>
                            <Link href="/checkout" ><Button>Go to Checkout</Button></Link>
                        </p>
                    </div>
                    : <header className={classes.cartIsEmpty}>
                        <h2>Your cart is empty.</h2>
                    </header>}
            </>
            
    )
}