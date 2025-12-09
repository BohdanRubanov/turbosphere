// import { Link } from "react-router-dom";
import HomeImage   from "../../assets/icons/home-image.svg" 
import styles from "./home.module.css"
export function HomePage(){
    return (
        <div className={styles.Main}>
            <h1 className={styles.titleMain}>TurboSphere: Performance at Your Pace.</h1>
            <div className={styles.mainDiv}>
                 <div className={styles.descriptions}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Our Mascot is a Snail. Here's Why.</h1>
                    <p>We live in a world obsessed with speed. But true quality is born from deliberation.</p>
                    <p>Our snail is a symbol of the three core principles of TurboSphere:</p>
                    <div className={styles.paragraphItem}>
                        <span className={styles.paragraphIcon}>🐌</span>
                        <div className={styles.paragraphBody}>
                            <p className={styles.paragraphTitle}>Mindful Curation</p>
                            <p className={styles.paragraphDesc}>We slowly select every item. No rushing - only rigorous testing, material checks, and a focus on longevity.</p>
                        </div>
                    </div>

                    <div className={styles.paragraphItem}>
                        <span className={styles.paragraphIcon}>🐌</span>
                        <div className={styles.paragraphBody}>
                            <p className={styles.paragraphTitle}>Steady Progress</p>
                            <p className={styles.paragraphDesc}>A snail always moves forward, carrying its home on its back. Our gear is built to be your reliable companion for the long haul, not to break after one season.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div> <img src={HomeImage} alt="" /> </div>
            </div>
            {/* <Link to='/products'>Products</Link> */}
           
        </div>
    )
}