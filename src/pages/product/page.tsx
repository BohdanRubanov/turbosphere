import { useNavigate, useParams } from "react-router-dom";
import { useProductById } from "../../hooks/use-product-by-id";
import styles from "./page.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart-context";
import { Button } from "../../shared";


interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    image?: string;
}

export function OneProductPage() {
    const { id } = useParams<{ id: string }>();
    const { product, error } = useProductById(Number(id));
    const navigate = useNavigate();
    const context = useContext(CartContext);

    useEffect(() => {
        if (id && Number.isNaN(Number(id))) {
            navigate("/");
        }
    }, [id, navigate]);

    if (error) return <h1 className={styles.error}>{error}</h1>;
    if (!product) return null;

    const handleAddToCart = () => {
        if (product) {
            context?.addToCart({ ...product, count: 1 });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.productImage}
                        src={product.image || "https://via.placeholder.com/400"} 
                        alt={product.name}
                    />
                </div>

                <div className={styles.productInfo}>
                    <h2 className={styles.productTitle}>{product.name}</h2>
                    
                    <div className={styles.divider} />
                    
                    <p className={styles.productDescription}>
                        {product.description || "No description available for this delicious item."}
                    </p>

                    <div className={styles.productButtons}>
                        <Button variant="buy" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                        <Button variant="buy" onClick={() => navigate('/checkout')}>
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}