// Next
import Link from "next/link";

// Class Variance Authority
import { cva } from "class-variance-authority";

// CLSX
import clsx from "clsx";

interface NavbarItemProps {
  label: string;
  url: string;
  intent: "appkit" | "walletkit" | "cloud" | "docs" | "default";
}

const navbarItemStyles = cva(
  "text-black rounded-2xl hover:rounded-3xl transition-all duration-300 p-2 px-6 text-[22px]",
  {
    variants: {
      intent: {
        default: ["bg-white"],
        appkit: ["bg-orange"],
        walletkit: ["bg-yellow"],
        cloud: ["bg-blue"],
        docs: ["bg-green"],
      },
    },
  }
);

export default function NavbarItem({ label, url }: NavbarItemProps) {
  const derivedIntent = label.toLowerCase().includes("appkit")
    ? "appkit"
    : label.toLowerCase().includes("walletkit")
    ? "walletkit"
    : label.toLowerCase().includes("cloud")
    ? "cloud"
    : label.toLowerCase().includes("docs")
    ? "docs"
    : "default";

  return (
    <Link
      className={clsx(navbarItemStyles({ intent: derivedIntent }))}
      href={url}
    >
      {label}
    </Link>
  );
}
