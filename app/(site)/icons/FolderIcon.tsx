import { SVGProps } from "react";

interface FolderIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function FolderIcon({ className, ...props }: FolderIconProps) {
  return (
    <div className={className}>
      <svg
        {...props}
        viewBox="0 0 99 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={99}
        height={82}
      >
        <path
          d="M.813 7.688A7.687 7.687 0 0 1 8.5 0h60.219a7.687 7.687 0 0 1 7.687 7.688v15.375H.812V7.688ZM.813 24.344h93.53a3.844 3.844 0 0 1 3.844 3.843v46.126A7.687 7.687 0 0 1 90.5 82h-82a7.687 7.687 0 0 1-7.688-7.688V24.344Z"
          fill="#F4B804"
        ></path>
      </svg>
    </div>
  );
}
