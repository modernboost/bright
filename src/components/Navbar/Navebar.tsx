"use client";
import NavebarItem from "./NavebarItem";
// import Menu from "@/components/Menu";

export default function Navbar({
  children,
  type = "vertical",
  horizontal_align = "center",
  items,
}: {
  type?: "vertical" | "horizontal";
  horizontal_align?: "end" | "center" | "start";
  children?: React.ReactNode;
  items?: Array<Record<string, any>>;
}) {
  return (
    <>
      <nav
        className={`hidden lg:flex mx-auto b-navbar  ${
          type == "horizontal" ? "" : "flex-col"
        } ${
          horizontal_align == "center"
            ? "justify-center"
            : horizontal_align == "end"
            ? "justify-end "
            : "justify-start"
        }`}
      >
        {items?.map(
          (item, i) =>
            item.headerItem && (
              <NavebarItem key={i} href={item.href}>
                {item.label}
              </NavebarItem>
            )
        )}
      </nav>
      <div className="flex">
        {children}
        {/* <Menu items={items} title={dic.title} /> */}
      </div>
    </>
  );
}
