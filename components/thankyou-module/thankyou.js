'use client'

import { useContext } from "react";

import Modal from "../UI/modal";
import UserProgressContext from "@/src/store/UserProgressContext";
import classes from "./thankyou.module.css";
import Button from "../UI/button";

export default function ThankYouModule() {
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseThanks() {
        userProgressCtx.hideThanks();
    }


    return (
        <Modal 
            className={classes.thanks} 
            open={userProgressCtx.progress === 'thanks'} 
            onClose={userProgressCtx.progress === 'thanks' ? handleCloseThanks : null} >
            <div className={classes.thanksContainer}>
                <h2>Thank you for your order!</h2>
                <p>Your order was submitted successfully.</p>
                <p>We will get back to you with more details via email within the next few minutes.</p>
            </div>
            
            <p className={classes.modalActions}>
            <Button onClick={handleCloseThanks} >Okay</Button>
            </p>
        </Modal>
    )
}