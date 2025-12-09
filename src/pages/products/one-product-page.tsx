import styles from './one-product-page.module.css'

export function OneProductPage() {
    return(
        <div className={styles.productCart}>
            <img className={styles.productImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg" alt="" />
            
            <div className={styles.productFullDescription}>
                <h2 className={styles.productTitle}>Product Title</h2>
                <p className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, officia labore. Obcaecati dolores vel impedit excepturi doloremque iusto, numquam veniam sed harum tempore labore necessitatibus vero ducimus, eaque facilis quisquam.</p>

                <div className={styles.productButtons}>
                    <button className={styles.productButton}>Add to cart</button>
                    <button className={styles.productButton}>Buy</button>
                </div>
            </div>
        </div>
    )
}