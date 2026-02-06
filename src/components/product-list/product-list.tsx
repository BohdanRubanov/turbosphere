import { useEffect, useState } from "react";
import { Product } from "../product";
import styles from "./product-list.module.css";
import { ProductListProps } from "./product-list.types";
import { useProducts } from "../../hooks";
import type { IProduct } from "../../shared";


export function ProductList({ search, selectedCategory }: ProductListProps) {
	const { products, loading, error } = useProducts();
	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products);

	useEffect(() => {
        const result = products.filter((product) => {
            const matchesCategory = 
                selectedCategory === "All" || 
                product.category?.id === selectedCategory;

            const matchesSearch = product.name
                .toLowerCase()
                .startsWith(search.toLowerCase());

            return matchesCategory && matchesSearch;
        });

        setFilteredProducts(result);
    }, [search, selectedCategory, products]);

	return (
		<div className={styles.productsBlock}>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				error
			) : (
				<>
					<p className={styles.productTitle}>
						Found {filteredProducts.length} products
					</p>
					<div className={styles.products}>
						{filteredProducts.map((product) => (
							<Product 
								key={product.id} 
								productInCart={{ ...product, count: 1 }}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}
