'use client'
import React, { createContext, useState } from "react";
import Popup from "../Popup/Popup";

export const DropdownContext = createContext({});
export default function Dropdown({
  children,
  ...rest
}: {
  children?: React.ReactNode;
}) {
  return <Popup {...rest}>{children} </Popup>;
}
