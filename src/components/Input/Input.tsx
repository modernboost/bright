import React, { forwardRef } from "react";

export default function Input({ ...props }) {
	return <input className='b-input' {...props} name='name' />;
}
