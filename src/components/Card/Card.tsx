export default function Card({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={"card rounded-xl border " + restProps.className}>{children}</div>
    )
}