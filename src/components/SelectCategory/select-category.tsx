import { IProps } from "./select-category.types";
import styles from './select-category.module.css'

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



export function SelectCategory(props: IProps) { 
	const { setCategory, selectedCategory } = props

    return (
        <div className={styles.selectCategory}>
			<p>Select category:</p>
			<div className = {styles.allCategories}>
				<label className = {styles.inputLabel} htmlFor="category">
					<input
						type="radio"
						onChange={() => {
							setCategory("All");
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
								setCategory(category.id);
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
    )
}