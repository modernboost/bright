import IsCurrentPath from "@/helpers/IsCurrentPath";
import Link from "next/link";

export default function NavebarItem({
  children,
  href,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <Link
        prefetch = {true}
	      href={href}
        className={`hover:text-primary-500  ${IsCurrentPath(href)&& "text-primary-500"} active:text-primary-600 navbar-item lg:mx-2  p-2`}
      >
        {children}
      </Link>
    );
  }
  return <div className="navbar-item lg:mx-3  p-2">{children}</div>;
}
