'use client'

import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    addUpItem:(item) => {},
    removeItem: (id) => {},
    deleteItem: (id) => {},
    emptyCart:() => {}
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item._id === action.item._id
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity:1 });
        }
        return {...state, items: updatedItems};
    }
    if (action.type === 'ADD_UP_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item._id === action.item._id
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.itemQuantity,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity:action.itemQuantity });
        }
        return {...state, items: updatedItems};
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item._id === action._id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity -1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return { ...state, items: updatedItems};
    }
    if (action.type === 'DELETE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item._id === action._id
        );

        const updatedItems = [...state.items];

        updatedItems.splice(existingCartItemIndex, 1);

        return { ...state, items: updatedItems};
    }
    if (action.type === 'EMPTY_CART') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item._id === action._id
        );

        const updatedItems = [...state.items];

        updatedItems.length = 0;

        return { ...state, items: updatedItems};
    }
    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    }

    function addUpItem({item, itemQuantity}) {
        dispatchCartAction({ type: 'ADD_UP_ITEM', item, itemQuantity });
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }

    function deleteItem(id) {
        dispatchCartAction({ type: 'DELETE_ITEM', id});
    }

    function emptyCart() {
        dispatchCartAction({ type: 'EMPTY_CART'});
    }

    const cartContext = {
        items: cart.items,
        addItem,
        addUpItem,
        removeItem,
        deleteItem,
        emptyCart
    };

    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    );
}

export default CartContext;