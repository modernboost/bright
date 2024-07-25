import React, { forwardRef } from "react";

export default function Input({ ...props }) {
	return <input className='input' {...props} name='name' />;
}
