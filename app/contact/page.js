'use client'

import { useContext, useState } from "react";
import Input from "@/components/UI/input";
import Button from "@/components/UI/button";
import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UserProgressContext from "@/src/store/UserProgressContext";
import Arrow from '@/assets/ArrowLightBlue.png'




export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const userProgressCtx = useContext(UserProgressContext);

    const router = useRouter();

    function handleShowResponse() {
        userProgressCtx.showResponse();
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        const fd = new FormData(event.target);
        const contactData = Object.fromEntries(fd.entries());

        function isInvalidText(text) {
            return !text || text.trim() === '';
        }

        function redirectCheck() {
            if (
                isInvalidText(contactData.fullName) || 
                isInvalidText(contactData.email) || 
                isInvalidText(contactData.subject) || 
                isInvalidText(contactData.phoneNumber) || 
                isInvalidText(contactData.message)||
                !contactData.email.includes('@')
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
                body: JSON.stringify({
                    contactData: {
                        message: contactData
                    }
                })
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit message');
            }
            handleShowResponse();
        } catch (error) {
            console.error(error); 
        } 
    };

    return(
            <form onSubmit={handleSubmit}>
                <header className={classes.header}>
                <h2>Contact Us</h2>
                </header>
                <div className={classes.contactDetail}>
                    <Input  className={classes.input} placeholder="Full Name" type="text" id="fullName" />
                    <Input  className={classes.input} placeholder="E-Mail Address" type="email" id="email" />
                    <Input  className={classes.input} placeholder="Subject" type="text" id="subject" />
                    <div>
                        <Input  className={classes.input} placeholder="Phone Number" type="tel" id="phoneNumber" />
                        <textarea name="message" className={classes.textarea} placeholder="Message" type="text" id="message" />
                    </div>
                </div>
                

                <p className={classes.modalActions}>
                    <Button type="button" textOnly className={classes.backToShop}>
                        <Image className={classes.arrow} 
                                src={Arrow} alt='Back to shop'
                                width={40} height={40}/>
                        <Link href="/shop" className={classes.backToShopLink}>Go Back To Shop</Link></Button>
                    <Button disabled={isSubmitting} >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </p>
            </form>
    );
}