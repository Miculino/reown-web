import { SVGProps } from "react";

interface UXNativeIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function UXNativeIcon({
  className,
  ...props
}: UXNativeIconProps) {
  return (
    <div className={className}>
      <svg
        {...props}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19.429A7.429 7.429 0 0 1 19.429 12h36.214a7.429 7.429 0 0 1 7.428 7.429v36.214a7.429 7.429 0 0 1-7.428 7.428H19.429A7.429 7.429 0 0 1 12 55.643V19.429ZM12 90.464C12 76.361 23.433 64.93 37.536 64.93c14.103 0 25.535 11.432 25.535 25.535S51.64 116 37.536 116 12 104.567 12 90.464ZM64.928 23.143c0-6.154 4.99-11.143 11.143-11.143h28.786C111.011 12 116 16.989 116 23.143v81.714c0 6.154-4.989 11.143-11.143 11.143H76.071c-6.154 0-11.142-4.989-11.142-11.143V23.143Z"
          fill="#202020"
        ></path>
      </svg>
    </div>
  );
}
