import Link from "next/link";
import React, { ReactNode, useContext } from "react";
import { DropdownContext } from "./Dropdown";
import styles from './Dropdown.module.css'

export default function DropdownItem({
  icon,
  text,
  href,
  children,
  autoClose = true,
  ...rest
}: {
  icon?: ReactNode | undefined;
  text: string | number;
  href?: string | undefined;
  children?: React.ReactNode | undefined;
  autoClose?: boolean;
}) {
  return (
    <>
      {href ? (
        <Link
          className="w-full  rounded p-2 hover:bg-slate-200 b-dropdown-item"
          href={href}
          {...rest}
        >
          {icon}
          {text}
          {children}
        </Link>
      ) : (
        <div
        {...rest}
          className={styles.dropdownItem}
        >
          {icon}
          {text}
          {children}
        </div>
      )}
    </>
  );
}
