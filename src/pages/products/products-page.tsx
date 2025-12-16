import { useState } from "react";
import { ProductList } from "../../components/ProductList/product-list";
import { SelectCategory } from "../../components/SelectCategory";
export function ProductPage() {
	const [selectCategory, setSelectCategory] = useState<"All" | number>("All");
	function setCategory(category: "All" | number) {
		setSelectCategory(category);
	}
	return (
		<div>
			<SelectCategory
				setCategory={setCategory}
				selectedCategory={selectCategory}
			/>
			<ProductList
				setCategory={setCategory}
				selectedCategory={selectCategory}
			/>
		</div>
	);
}
