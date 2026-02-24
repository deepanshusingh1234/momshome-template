// context/CartContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, CartData } from "@/types/cart";

interface CartContextType {
    cart: CartData;
    addToCart: (item: CartItem) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
    applyCoupon: (code: string) => void;
    updateNote: (note: string) => void;
}

const defaultCart: CartData = {
    items: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    itemCount: 0
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartData>(defaultCart);

    const addToCart = (newItem: CartItem) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.items.findIndex(item =>
                item.variantId === newItem.variantId &&
                JSON.stringify(item.selectedOptions) === JSON.stringify(newItem.selectedOptions)
            );

            let updatedItems: CartItem[];

            if (existingItemIndex >= 0) {
                // Update quantity if item exists
                updatedItems = prevCart.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
                // Add new item
                updatedItems = [...prevCart.items, newItem];
            }

            const subtotal = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            return {
                items: updatedItems,
                subtotal,
                total: subtotal - prevCart.discount,
                discount: prevCart.discount,
                itemCount: updatedItems.reduce((acc, item) => acc + item.quantity, 0),
                couponCode: prevCart.couponCode,
                note: prevCart.note
            };
        });
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        if (quantity < 1) return;

        setCart(prevCart => {
            const updatedItems = prevCart.items.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            );

            const subtotal = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            return {
                ...prevCart,
                items: updatedItems,
                subtotal,
                total: subtotal - prevCart.discount,
                itemCount: updatedItems.reduce((acc, item) => acc + item.quantity, 0)
            };
        });
    };

    const removeFromCart = (itemId: string) => {
        setCart(prevCart => {
            const updatedItems = prevCart.items.filter(item => item.id !== itemId);
            const subtotal = updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

            return {
                ...prevCart,
                items: updatedItems,
                subtotal,
                total: subtotal - prevCart.discount,
                itemCount: updatedItems.reduce((acc, item) => acc + item.quantity, 0)
            };
        });
    };

    const clearCart = () => {
        setCart(defaultCart);
    };

    const applyCoupon = (code: string) => {
        // Implement coupon logic here
        setCart(prev => ({ ...prev, couponCode: code }));
    };

    const updateNote = (note: string) => {
        setCart(prev => ({ ...prev, note }));
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
            applyCoupon,
            updateNote
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}