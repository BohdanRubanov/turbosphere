import type { ReactNode } from "react"
import styles from "./main.module.css"


interface IMainProps {
    children: ReactNode
}


export function Main(props: IMainProps){
    const {children} = props
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}
