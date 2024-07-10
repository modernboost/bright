export default function CardHeader({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={"card-header " + restProps.className}>{children}</div>
    )
}