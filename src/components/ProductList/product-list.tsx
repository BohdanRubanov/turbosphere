import { useEffect, useState } from "react";
import { Product } from "../Product/product";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./product-list.module.css";
import { IProps } from "../SelectCategory/select-category.types";
import { IProduct } from "../../shared";
// const products = [
// 	{
// 		id: 1,
// 		title: "Product 1",
// 		price: 100,
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
// 		categoryId: 1,
// 	},
// 	{
// 		id: 2,
// 		title: "Product 2",
// 		price: 200,
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
// 		categoryId: 1,
// 	},
// 	{
// 		id: 3,
// 		title: "Product 3",
// 		price: 300,
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
// 		categoryId: 1,
// 	},
// 	{
// 		id: 4,
// 		title: "Product 4",
// 		price: 400,
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
// 		categoryId: 2,
// 	},
// 	{
// 		id: 5,
// 		title: "Product 5",
// 		price: 500,
// 		image:
// 			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg",
// 		categoryId: 2,
// 	},
// ];

export function ProductList(props: IProps) {
	const [search, setSearch] = useState<string>("");
	const {selectedCategory, setCategory} = props 
	const [ allProducts, setAllProducts ] = useState<IProduct[]>([])
	const [filteredProducts, setFilteredProducts] = useState(allProducts);

	useEffect(() => {
		async function getAllProducts(){
			try{
				const result = await fetch("http://localhost:8000/products");
				const products = await result.json();
				setAllProducts(products)
			}
			catch(error){
				console.log(error)
			}
		}
		getAllProducts();
		
	},[])

	useEffect(() => {
		if (selectedCategory === "All") {
			const searchProducts = allProducts.filter((product) => {
				return product.name.includes(search);
			});
			setFilteredProducts(searchProducts);
		} else {
			const newProducts = allProducts.filter((product) => {
				return (
					product.categoryId === selectedCategory &&
					product.name.includes(search)
				);
			});
			setFilteredProducts(newProducts);
		}
	}, [search, selectedCategory, allProducts]);
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
