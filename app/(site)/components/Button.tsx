// Next
import Link from "next/link";

// Class Variance Authority
import { cva, VariantProps } from "class-variance-authority";

// CLSX
import clsx from "clsx";
import { ReactNode } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center font-medium transition rounded-2xl hover:rounded-full px-4 py-2",
  {
    variants: {
      intent: {
        primary: "bg-blue",
        secondary: "bg-dark-gray text-blue",
        outline: "bg-transparent border",
      },
      color: {
        white: "border-white",
        blue: "border-blue",
        "dark-gray": "border-dark-gray",
      },
    },
    compoundVariants: [
      {
        intent: "outline",
        color: "white",
        className: "text-white",
      },
      {
        intent: "outline",
        color: "blue",
        className: "text-blue",
      },
      {
        intent: "secondary",
        color: "dark-gray",
        className: "text-blue",
      },
    ],
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  intent = "primary",
  color = "white",
  href,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const buttonClassName = clsx(buttonStyles({ intent, color }), className);

  return href ? (
    <Link href={href} target="_blank" className={buttonClassName} {...props}>
      {children}
    </Link>
  ) : (
    <button className={buttonClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
