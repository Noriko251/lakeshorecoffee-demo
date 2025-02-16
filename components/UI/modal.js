'use client'


import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./modal.module.css";

export default function Modal({ children, open, onClose, className = '' }) {
    const dialog = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!dialog.current || !isClient) return;

        const modal = dialog.current;
        if (open) {
            modal.showModal();
        } else {
            modal.close();
        }

        return () => modal.close();
    }, [open, isClient]);

    if (!isClient) return null;

    return createPortal(
        
    <dialog ref={dialog} className={`${classes.modal} ${className}`} onClose={onClose}>
    {children}
    </dialog>,
    document.body
    );
}