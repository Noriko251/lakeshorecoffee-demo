'use client'

import { useContext } from "react";

import Modal from "../UI/modal";
import UserProgressContext from "@/src/store/UserProgressContext";
import classes from "./contact-response.module.css";
import Button from "../UI/button";

export default function ResponseModule() {
    const userProgressCtx = useContext(UserProgressContext);

    function handleCloseResponse() {
        userProgressCtx.hideResponse();
    }


    return (
        <Modal 
            className={classes.thanks} 
            open={userProgressCtx.progress === 'response'} 
            onClose={userProgressCtx.progress === 'response' ? handleCloseResponse : null} >
            <div className={classes.thanksContainer}>
                <h2>Thank you for contacting us!</h2>
                <p>We have received your message and will get back to you shortly.</p>
            </div>
            
            <p className={classes.modalActions}>
            <Button onClick={handleCloseResponse} >Okay</Button>
            </p>
        </Modal>
    )
}