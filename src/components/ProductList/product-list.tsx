import { useEffect, useState } from "react";
import { Product } from "../Product/product";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./product-list.module.css";
const categories = [
	{
		id: 1,
		name: "Cats",
	},
	{
		id: 2,
		name: "Dogs",
	},
];
const products = [
	{
		id: 1,
		name: "Product 1",
		price: 100,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
		categoryId: 1,
	},
	{
		id: 2,
		name: "Product 2",
		price: 200,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
		categoryId: 1,
	},
	{
		id: 3,
		name: "Product 3",
		price: 300,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
		categoryId: 1,
	},
	{
		id: 4,
		name: "Product 4",
		price: 400,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
		categoryId: 2,
	},
	{
		id: 5,
		name: "Product 5",
		price: 500,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
		categoryId: 2,
	},
];

export function ProductList() {
	const [search, setSearch] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<"All" | number>(
		"All",
	);

	const [filteredProducts, setFilteredProducts] = useState(products);

	useEffect(() => {
		if (selectedCategory === "All") {
			const searchProducts = products.filter((product) => {
				return product.name.includes(search);
			});
			setFilteredProducts(searchProducts);
		} else {
			const newProducts = products.filter((product) => {
				return (
					product.categoryId === selectedCategory &&
					product.name.includes(search)
				);
			});
			setFilteredProducts(newProducts);
		}
	}, [search, selectedCategory]);
	return (
		<div className={styles.container}>
			<div className={styles.filterBlock}>
				<div className={styles.searchBlock}>
					<input
						type="text"
						placeholder="Find products..."
						className={styles.search}
						onChange={(event) => {
							const input = event.target.value;
							setSearch(input);
						}}
					/>
					<SearchIcon className={styles.searchIcon} />
				</div>
				<div className={styles.selectCategory}>
					<p>Select category:</p>
					<div className = {styles.allCategories}>
						<label className = {styles.inputLabel} htmlFor="category">
							<input
								type="radio"
								onChange={() => {
									setSelectedCategory("All");
								}}
								value={"All"}
								name="category"
								checked={selectedCategory === "All"}/>
							All
						</label>
						
						{categories.map((category) => {
							return (
								<label className = {styles.inputLabel} htmlFor="category" key = {category.id}>
									<input
										type="radio"
										value={category.id}
										name="category"
										onChange={() => {
											setSelectedCategory(category.id);
										}}
										checked={selectedCategory === category.id}
										key={category.id}
									/>
									{category.name}
								</label>
							);
						})}
					</div>
				</div>
			</div>
			<div className={styles.productsBlock}>
				<div className={styles.products}>
					{filteredProducts.map((product) => {
						return <Product product={product} key={product.id}></Product>;
					})}
				</div>
			</div>
		</div>
	);
}
