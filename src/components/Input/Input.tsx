import React, { forwardRef } from "react";

export default forwardRef((props: React.ComponentProps<"input">, ref) =>{
    return <input className="input" {...props} name="name"   /> 
})