
import { useState } from "react";

import styles from "./product.module.css"
import type { IProps } from "./types";

export function Product(props: IProps) {
	const [count, setCount] = useState<number>(0);
	const { product } = props;

	function addProduct() {
		setCount(count + 1);
	}

	function minusProduct() {
		setCount(count - 1);
	}
	return (
		<div className={styles.block}>
			<img src={product.image} className = {styles.image} alt="" />
			<p className={styles.title}>{product.title}</p>
			<p className={styles.price}>{product.price}</p>
			<div className={styles.counter}>
				<p>Count: {count}</p>
				<button className={styles.buttonIcon} type="button" onClick={addProduct}>+</button>
				<button className={styles.buttonIcon} type="button" onClick={minusProduct}>-</button>
			</div>
			<button type="button" className={styles.buttonMore}>More</button>
		</div>
	);
}
