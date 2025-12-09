import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import { Main } from "../Main/main";
import styles from "./layout.module.css";
export function Layout() {
	return (
		<div className={styles.container}>
			<Header />

            <Main>
                <Outlet></Outlet>
            </Main>

            <Footer />
		</div>
	);
}
