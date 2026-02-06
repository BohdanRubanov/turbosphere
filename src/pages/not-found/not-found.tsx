import { IMAGES } from "../../shared";
import styles from "./not-found.module.css";

export function NotFoundPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Page not found :(</h1>
                <div className={styles.imageBox}>
                    <img 
                        src={IMAGES.notFound} 
                        alt="Not found" 
                        className={styles.image} 
                    />
                </div>
            </div>
        </div>
    );
}