'use client'

import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '', //'cart', 'thanks'
    showCart: () => {},
    hideCart: () => {},
    showThanks: () => {},
    hideThanks: () => {},
    showResponse: () => {},
    hideResponse: () => {}
});

export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showThanks() {
        setUserProgress('thanks');
    }

    function hideThanks() {
        setUserProgress('');
    }

    function showResponse() {
        setUserProgress('response')
    }

    function hideResponse() {
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showThanks,
        hideThanks,
        showResponse,
        hideResponse
    };

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
}

export default UserProgressContext;