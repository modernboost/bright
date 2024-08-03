export default function CardBody({children, ...restProps}: React.ComponentProps<"div">){
    return (
        <div {...restProps} className={"b-card-body " + restProps.className}>{children}</div>
    )
}