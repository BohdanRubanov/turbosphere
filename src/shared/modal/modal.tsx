import { IModalProps } from "./modal.types"
import styles from "./modal.module.css"
import { useEffect, useRef } from "react"

export function Modal(props: IModalProps) {
    const { children, className, isOpen, onClose, doCloseOnOutsideClick } = props

    const modalRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        if (!doCloseOnOutsideClick) return 
        
        function clickOutside(event: MouseEvent) {
            const target = event.target as HTMLElement
            
            if (!modalRef.current?.contains(target)){
                onClose()
            }
        }
        document.body.addEventListener("click", clickOutside)
        return () => document.body.removeEventListener("click", clickOutside)
    }, [])

    if (!isOpen) {
        return null
    }

    return (
        <div className={`${className} ${styles.modal}`} ref={modalRef}>

            {children}
        </div>
    )
}