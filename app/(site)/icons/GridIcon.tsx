import { SVGProps } from "react";

interface GridIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function GridIcon({ className, ...props }: GridIconProps) {
  return (
    <div className={className}>
      <svg
        {...props}
        viewBox="0 0 99 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={99}
        height={84}
      >
        <path
          d="M.813 56.375h97.374v19.219A7.687 7.687 0 0 1 90.5 83.28h-82a7.687 7.687 0 0 1-7.688-7.687V56.375ZM.813 28.188h97.374v26.906H.814V28.187ZM.813 7.688A7.687 7.687 0 0 1 8.5 0h82a7.687 7.687 0 0 1 7.688 7.688v19.218H.811V7.688Z"
          fill="#F0573C"
        ></path>
      </svg>
    </div>
  );
}
