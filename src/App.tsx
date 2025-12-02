import { Header } from "./components/Header/header";
import { Main } from "./components/Main/main";
import { ProductList } from "./components/ProductList/product-list";
import { Footer } from "./components/Footer/footer";
import styles from "./App.module.css"

export function App() {

	return (
		<div className={styles.container}>
			<Header></Header>
			<Main>
            	<ProductList />
			</Main>
			<Footer></Footer>
		</div>
	);
}
