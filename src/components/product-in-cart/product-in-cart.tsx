import { useContext } from "react";
import styles from "./product-in-cart.module.css";
import { CartContext, type CartItem } from "../../context/cart-context";
import { Button } from "../../shared";
import { Link } from "react-router-dom";

interface ProductInCartProps {
    productInCart: CartItem;
}

export function ProductInCart({ productInCart }: ProductInCartProps) {
    const cartContext = useContext(CartContext);
    if (!cartContext) return null;

    const { incrementCount, decrementCount, removeFromCart } = cartContext;

    return (
        <div className={styles.cartItem}>
            <img 
                src={productInCart.image} 
                alt={productInCart.name} 
                className={styles.itemImage} 
            />
            
            <div className={styles.itemContent}>
                <div className={styles.textDetails}>
                    <div className={styles.field}><span className={styles.label}>Name:</span> {productInCart.name}</div>
                    <div className={styles.field}>
                        <span className={styles.label}>Description:</span> 
                        <span className={styles.descriptionText}>{productInCart.description || "No description"}</span>
                    </div>
                    <div className={styles.field}><span className={styles.label}>Category:</span> {productInCart.category?.name || "General"}</div>
                    <div className={styles.field}><span className={styles.label}>Price:</span> {productInCart.price}$</div>
                </div>
                
                <div className={styles.counterSection}>
                    <p className={styles.countText}>Number of items: {productInCart.count}</p>
                    <div className={styles.counterButtons}>
                        <Button 
                            variant="count-green" 
                            className={styles.roundBtn}
                            onClick={() => incrementCount(productInCart.id)}
                        > + </Button>
                        <Button 
                            variant="count-red" 
                            className={styles.roundBtn}
                            onClick={() => decrementCount(productInCart.id)}
                            disabled={productInCart.count === 0}
                        > − </Button>
                    </div>
                </div>
            </div>

            <div className={styles.itemActions}>
                <Button variant="buy" className={styles.actionBtn}>Buy</Button>
                <Link 
					to={`/product/${productInCart.id}`} 
					className={`${styles.actionBtn} ${styles.linkAsButton}`}
				>
					Go to
				</Link>
                <Button 
                    variant="buy" 
                    className={`${styles.actionBtn} ${styles.deleteText}`}
                    onClick={() => removeFromCart(productInCart.id)}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}