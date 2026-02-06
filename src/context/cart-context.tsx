import { createContext, useState, type ReactNode } from "react";
import type { IProduct } from "../shared";

export interface CartItem extends IProduct {
    count: number;
}

interface ICartContext {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    getTotalPrice: () => number;
    incrementCount: (id: number) => void;
    decrementCount: (id: number) => void;
    removeAll: () => void;
}

export const CartContext = createContext<ICartContext | null>(null);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [items, setItems] = useState<CartItem[]>([]);

    function addToCart(item: CartItem) {
        const isInCart = items.findIndex((cartItem) => cartItem.id === item.id);

        if (isInCart !== -1) {
            incrementCount(item.id);
        } else {
            const newItems = [...items, { ...item, count: item.count > 0 ? item.count : 1 }];
            setItems(newItems);
        }
    }

    function removeFromCart(id: number) {
        setItems(prev => prev.filter((item) => item.id !== id));
    }

    function getTotalPrice(): number {
        return items.reduce((sum, currentItem) => sum + (currentItem.price * currentItem.count), 0);
    }

    function incrementCount(id: number) {
        setItems(prev => prev.map((item) => {
            if (item.id === id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        }));
    }

    function decrementCount(id: number) {
        setItems(prev => prev.map((item) => {
            if (item.id === id) {
                const newCount = item.count - 1;
                return { ...item, count: newCount >= 0 ? newCount : 0 };
            }
            return item;
        }));
    }

    function removeAll() {
        setItems([]);
    }

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                getTotalPrice,
                incrementCount,
                decrementCount,
                removeAll,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}