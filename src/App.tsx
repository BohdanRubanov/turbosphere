import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout";
import { ProductPage } from "./pages/products/products-page";
import { OneProductPage } from "./pages/products/one-product-page"
import { HomePage } from "./pages/home/home-page";

export function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>

					<Route path="/" element={<HomePage/>}/>
					<Route path="/products" element={<ProductPage />}/>
					<Route path="/product/:id" element={<OneProductPage />}/>
						
					
				
				</Route>

				
			</Routes>
		
		</BrowserRouter>
	);
}
