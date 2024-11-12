import { SVGProps } from "react";

interface ControlIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ControlIcon({ className, ...props }: ControlIconProps) {
  return (
    <div className={className}>
      <svg
        {...props}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 33c0-11.046 8.954-20 20-20h62c11.046 0 20 8.954 20 20v62c0 11.046-8.954 20-20 20H33c-11.046 0-20-8.954-20-20V33Zm71 7H44a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V44a4 4 0 0 0-4-4Zm-40-2a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h40a6 6 0 0 0 6-6V44a6 6 0 0 0-6-6H44Zm16 20a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8Z"
          fill="#202020"
        ></path>
      </svg>
    </div>
  );
}
