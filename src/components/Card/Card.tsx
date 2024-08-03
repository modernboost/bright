export default function Card({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={"b-card rounded-xl border " + restProps.className}>{children}</div>
    )
}