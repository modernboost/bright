import styles from './CardFooter.module.css'
export default function CardFooter({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={styles.cardFooter + restProps.className}>{children}</div>
    )
}