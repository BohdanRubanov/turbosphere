import { useContext } from "react";
import styles from "./product.module.css";
import { CartContext } from "../../context/cart-context";
import { Button } from "../../shared";
import type { ProductProps } from "./product.types";
import { Link } from "react-router-dom";

export function Product({ productInCart }: ProductProps) {
    const cartContext = useContext(CartContext);
    
    if (!cartContext) return null;

    const { incrementCount, decrementCount, addToCart, items } = cartContext;

    const currentItem = items.find(item => item.id === productInCart.id);
    const count = currentItem ? currentItem.count : 0;

    const handleIncrement = () => {
        if (count === 0) {
            addToCart({ ...productInCart, count: 1 });
        } else {
            incrementCount(productInCart.id);
        }
    };

    return (
        <div className={styles.block}>
            <img 
                src={productInCart.image} 
                alt={productInCart.name} 
                className={styles.image} 
            />
            
            <h3 className={styles.title}>{productInCart.name}</h3>
            
            <p className={styles.price}>${productInCart.price}</p>
            
            <div className={styles.counter}>
                <span className={styles.countText}>Count: {count}</span>
                <div className={styles.counterButtons}>
                    <Button 
                        variant="count" 
                        onClick={() => decrementCount(productInCart.id)}
                        className={styles.buttonIcon}
                        disabled={count === 0}
                    >
                        -
                    </Button>
                    <Button 
                        variant="count" 
                        onClick={handleIncrement}
                        className={styles.buttonIcon}
                    >
                        +
                    </Button>
                </div>
            </div>

            <Link to={`/product/${productInCart.id}`} className={styles.buttonMore}>
                More
            </Link>
        </div>
    );
}