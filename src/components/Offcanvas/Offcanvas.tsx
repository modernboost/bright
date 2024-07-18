'use client'

import clsx from "clsx";
import React, { createContext, useContext, useEffect, useState } from "react";
import Text from "../Text/Text";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";
// import IsCurrentPath from "@/helpers/IsCurrentPath";
const IsCurrentPath = ()=>{}

export const OffcanvasContext = createContext({
  open: false,
  setOpen: (prev)=>prev,
});

export default function Offcanvas({
  open = false,
  position = "left",
  items = [],
  title,
  onChange = () => {},
}: {
  position: "left" | "right";
  title?: string;
  open?: boolean;
  onChange?: Function;
  items: Array<Record<string, any>>;
}) {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setOpen(open);
  }, [open]);

  useEffect(() => {
    console.log("change");
    onChange(isOpen);
  }, [isOpen]);

  return (
    <OffcanvasContext.Provider value={{ open: isOpen, setOpen }}>
      {open && (
        <div
          className="offcanvas-backdrop"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div className={clsx(!isOpen && "hidden", "offcanvas", position)}>
        <OffcanvasHeader title={title}></OffcanvasHeader>
        <OffcanvasBody>
          {items.map((item, i) => {
            return <OffcanvasItem key={i} item={item} />;
          })}
        </OffcanvasBody>
      </div>
    </OffcanvasContext.Provider>
  );
}

function OffcanvasBody({ children }: { children: React.ReactNode }) {
  return <div className="offcanvas-body">{children}</div>;
}

function OffcanvasItem({ item }: { item?: Record<string, any> }) {
  const { setOpen } = useContext(OffcanvasContext);
  if (item.items) {
    return items.map((item, i) => (
      <OffcanvasItem key={i} label={item.label} Icon={item.icon} />
    ));
  }

  return (
    <div className="offcanvas-item ">
      {item.href ? (
        <Link
          prefetch={true}
          className={`flex gap-3 items-center ${
            IsCurrentPath(item.href) && "text-primary-500"
          }`}
          href={item.href ?? "#"}
          key={item.label}
          onClick={() => {
            setOpen(false);
          }}
        >
          {item.icon}
          {item.label}
          <div className="flex-auto">{item.component}</div>
        </Link>
      ) : (
        <div className="flex gap-3 items-center">
          {item.icon}
          {item.label}
          {item.component}
        </div>
      )}
    </div>
  );
}

function OffcanvasHeader({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  const { setOpen } = useContext(OffcanvasContext);
  return (
    <div className="offcanvas-header ">
      <Text type="h3">{title}</Text>
      {children}
      <IconX
        className="cursor-pointer"
        onClick={() => {
          console.log("this");
          setOpen(false);
        }}
      />
    </div>
  );
}
