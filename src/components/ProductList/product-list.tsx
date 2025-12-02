import { Product } from "../Product/product";
import styles from "./product-list.module.css"

const products = [
	{
		id: 1,
		title: "Product 1",
		price: 100,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
	},
	{
		id: 2,
		title: "Product 2",
		price: 200,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
	},
	{
		id: 3,
		title: "Product 3",
		price: 300,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
	},
	{
		id: 4,
		title: "Product 4",
		price: 400,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
	},
	{
		id: 5,
		title: "Product 5",
		price: 500,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
	},
	{
		id: 6,
		title: "Product 6",
		price: 500,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
	},
	{
		id: 7,
		title: "Product 7",
		price: 500,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
	},
];

export function ProductList() {
	return (
		<div className={styles.productList}>
			{products.map((product) => {
				return <Product key={product.id} product={product} />;
			})}
		</div>
	);
}
