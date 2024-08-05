import styles from './CardBody.module.css'
export default function CardBody({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={styles.cardBody + restProps.className}>{children}</div>
    )
}