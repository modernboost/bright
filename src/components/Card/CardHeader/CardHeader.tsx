
import styles from "./CardHeader.module.css"
export default function CardHeader({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={styles.CardHeader + restProps.className}>{children}</div>
    )
}