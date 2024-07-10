export default function CardFooter({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={"card-footer " + restProps.className}>{children}</div>
    )
}