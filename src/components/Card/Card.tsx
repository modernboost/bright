import styles from './Card.module.css'
export default function Card({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={styles.card + restProps.className}>{children}</div>
    )
}