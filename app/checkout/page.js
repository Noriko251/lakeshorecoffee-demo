'use client'

import { useContext, useState } from "react";
import CartContext from "@/src/store/CartContext";
import { currencyFormatter } from "@/src/util/formatting";
import Input from "@/components/UI/input";
import Button from "@/components/UI/button";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UserProgressContext from "@/src/store/UserProgressContext";
import Arrow from '@/assets/ArrowLightBlue.png'




export default function Checkout() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    const router = useRouter();

    function handleShowThanks() {
        userProgressCtx.showThanks();
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        function isInvalidText(text) {
            return !text || text.trim() === '';
        }

        function redirectCheck() {
            if (
                isInvalidText(customerData.fullName) || 
                isInvalidText(customerData.email) || 
                isInvalidText(customerData.street) || 
                isInvalidText(customerData.postalCode) || 
                isInvalidText(customerData.city)||
                !customerData.email.includes('@')
            ) {
                throw new Error('Invalid input');
            }
            else {
                router.replace('/shop');
            }
    }

        try {
            redirectCheck();
            
            const response =  await fetch('/api/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({orderData: {
                        items: cartCtx.items,
                        customer: customerData
                    }
                })
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
            }
            if (!response.ok) {
                throw new Error('Failed to submit order');
            }
            cartCtx.emptyCart();
            handleShowThanks();
        } catch (error) {
            Error();
        } 
    };

    return(
            <form onSubmit={handleSubmit}>
                <header className={classes.header}>
                <h2>Checkout</h2>
                </header>
                <div className={classes.checkoutContent}>
                    <div className={classes.columnHeader}>
                        <p className={classes.columnHeaderItems}>Items</p>
                        <p className={classes.columnHeaderQuantity}>Quantity</p>
                        <p className={classes.columnHeaderSubtotal}>Subtotal</p>
                    </div>
                    <hr/>
                    <ul>
                        {cartCtx.items.map((item) => (
                        
                        <li key={item._id} >
                            <div className={classes.item}>
                                <Image className={classes.itemImage} 
                                    src={item.image} alt={item.name} 
                                    width={50} height={50} 
                                    unoptimized
                                />
                                <div className={classes.itemDetail}>
                                    <p className={classes.name}>{item.name}</p>
                                    <p className={classes.price}>{currencyFormatter.format(item.price)}</p>
                                </div>
                            </div>
                            <span className={classes.quantity}>{item.quantity}</span>
                            <p className={classes.subtotal}>{currencyFormatter.format(item.price * item.quantity)}</p>
                        </li>
                        ))}
                    </ul>
                    <hr/>
                    <p className={classes.cartTotal}>Total: {currencyFormatter.format(cartTotal)}</p>       
                </div>
                <div className={classes.shippingInfo}>
                    <h3>Shipping Information</h3>
                    <Input className={classes.input} placeholder="Full Name" type="text" id="fullName" />
                    <Input className={classes.input} placeholder="E-Mail Address" type="email" id="email" />
                    <Input className={classes.input} placeholder="Street" type="text" id="street" />
                    <div>
                        <Input className={classes.input} placeholder="Postal Code" type="text" id="postalCode" />
                        <Input className={classes.input} placeholder="City" type="text" id="city" />
                    </div>
                </div>
                

                <p className={classes.checkoutActions}>
                    <Link href="/cart" className={classes.backToCartLink}>
                        <Image className={classes.arrow} 
                                src={Arrow} alt='Back to cart'
                                width={40} height={40}/>
                        <Button type="button" textOnly className={classes.backToCartButton}>
                            Return to Cart
                        </Button>
                    </Link>
                    <Button disabled={isSubmitting} >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </p>
            </form>
    );
}