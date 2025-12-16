import styles from "./main.module.css"
import { IMainProps } from "./main.types"


export function Main(props: IMainProps){
    const {children} = props
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}
