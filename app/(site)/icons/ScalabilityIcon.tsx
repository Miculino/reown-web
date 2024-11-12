import { SVGProps } from "react";

interface ScalabilityIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ScabalityIcon({
  className,
  ...props
}: ScalabilityIconProps) {
  return (
    <div className={className}>
      <svg
        {...props}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13 25c0-6.627 5.373-12 12-12h78c6.627 0 12 5.373 12 12v78c0 6.627-5.373 12-12 12H25c-6.627 0-12-5.373-12-12V25Zm37 2H28.374l20.94 20.94-1.413 1.415L27 28.455V50h-2V25h25v2ZM27 99.546l20.9-20.901 1.415 1.414L28.375 101H50v2H25V78h2v21.546ZM78 27h21.626l-20.94 20.94 1.413 1.415L101 28.455V50h2V25H78v2Zm23 72.546L80.1 78.645l-1.415 1.414L99.625 101H78v2h25V78h-2v21.546Z"
          fill="#202020"
        ></path>
      </svg>
    </div>
  );
}
