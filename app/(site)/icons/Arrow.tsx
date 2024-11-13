import { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ArrowIcon({ className, ...props }: ArrowIconProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 32"
        fill="none"
        {...props}
      >
        <path
          stroke="#fff"
          strokeWidth="2"
          d="m18.564 1.257 14.523 14.524-14.524 14.524M.475 15.784h31.747"
        ></path>
      </svg>
    </div>
  );
}
