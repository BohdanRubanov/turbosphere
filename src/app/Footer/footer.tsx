import { ReactComponent as ShopLogo } from "../../assets/icons/logo.svg"
import styles from './footer.module.css'

export function Footer(){
    return (
        <footer className={styles.footer}>
            <ShopLogo width={50} height={50}/>

            <div className={styles.footerInfo}>
                <p>© 2024 TurboSphere. All rights reserved</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
        </footer>
    )
}