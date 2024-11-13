// React
import { SVGProps } from "react";

interface zkSyncLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function zkSyncLogo({ className, ...props }: zkSyncLogoProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 131 32"
        width={131}
        height={32}
        {...props}
      >
        <g clipPath="url(#clip0_347_68333)">
          <path
            fill="#363636"
            d="M45.1911 16.8388L32.437 3.99295V13.4057L19.7719 22.8243L32.437 22.8303V29.6905L45.1911 16.8388Z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
          <path
            fill="#363636"
            d="M0.228333 16.8388L12.9824 29.6905V20.373L25.5585 10.9484L12.9884 10.9424V3.987L0.228333 16.8388Z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
          <path
            fill="#363636"
            d="M64.8298 24.407H55.0432V21.5749L60.6457 15.2739H55.1856V12.4894H64.7289V15.1787L58.9602 21.5987H64.8298V24.407Z"
          ></path>
          <path
            fill="#363636"
            d="M78.1834 12.4894L73.4473 17.5051L78.2783 24.407H74.3613L71.2336 19.8553L69.9101 21.2595V24.407H66.7112V6.87268H69.9101V16.928L73.9992 12.4953H78.1834V12.4894Z"
          ></path>
          <path
            fill="#363636"
            d="M92.0948 11.3291L89.1155 12.2514C89.0027 11.6385 88.7 11.0792 88.2015 10.5794C87.703 10.0797 86.973 9.82976 86.0115 9.82976C85.2281 9.82976 84.5871 10.0499 84.0886 10.4842C83.5901 10.9067 83.3408 11.4124 83.3408 12.0074C83.3408 13.0546 83.958 13.7031 85.1925 13.9471L87.5724 14.4052C89.0798 14.6968 90.249 15.3037 91.0858 16.2199C91.9227 17.1422 92.3381 18.225 92.3381 19.4686C92.3381 20.8906 91.7802 22.1341 90.6526 23.1991C89.5487 24.2463 88.0531 24.7759 86.1777 24.7759C85.1035 24.7759 84.1361 24.6152 83.2696 24.2939C82.4031 23.9726 81.7087 23.5442 81.1805 23.0088C80.6523 22.4614 80.2368 21.8842 79.9282 21.2892C79.6374 20.6764 79.4653 20.0457 79.4 19.3972L82.4802 18.5761C82.5574 19.4983 82.9135 20.2659 83.5366 20.8787C84.1776 21.4915 85.0679 21.8009 86.2074 21.8009C87.0739 21.8009 87.7445 21.6046 88.2252 21.2178C88.7238 20.8311 88.973 20.3194 88.973 19.6947C88.973 19.1949 88.789 18.7665 88.4211 18.4095C88.0709 18.0406 87.5605 17.7907 86.9077 17.6598L84.5278 17.1779C83.1509 16.8863 82.0589 16.3151 81.2577 15.4584C80.4564 14.6016 80.0588 13.5365 80.0588 12.2633C80.0588 10.746 80.6345 9.46682 81.7918 8.43749C82.961 7.40221 84.3616 6.88457 85.9996 6.88457C86.9789 6.88457 87.8513 7.02141 88.6229 7.29511C89.3944 7.5688 90.0116 7.94365 90.4746 8.40774C90.9375 8.85993 91.2995 9.32997 91.5547 9.81191C91.798 10.2879 91.982 10.7936 92.0948 11.3291Z"
          ></path>
          <path
            fill="#363636"
            d="M97.7209 29.1074H94.3321L97.1215 22.9076L92.0946 12.4894H95.6793L98.8307 19.4626L101.739 12.4894H105.151L97.7209 29.1074Z"
          ></path>
          <path
            fill="#363636"
            d="M109.567 17.5527V24.407H106.368V12.4894H109.472V13.965C109.81 13.3819 110.291 12.9416 110.914 12.6322C111.537 12.3228 112.196 12.174 112.885 12.174C114.279 12.174 115.336 12.6203 116.06 13.5068C116.796 14.3814 117.164 15.5119 117.164 16.8982V24.407H113.965V17.4575C113.965 16.7495 113.781 16.1724 113.413 15.738C113.063 15.3037 112.517 15.0835 111.775 15.0835C111.104 15.0835 110.564 15.3156 110.166 15.7856C109.769 16.2557 109.567 16.8447 109.567 17.5527Z"
          ></path>
          <path
            fill="#363636"
            d="M125.004 15.1073C124.155 15.1073 123.443 15.4048 122.861 16.0058C122.285 16.6008 121.995 17.4159 121.995 18.4512C121.995 19.4865 122.285 20.3075 122.861 20.9204C123.455 21.5154 124.173 21.8188 125.027 21.8188C125.781 21.8188 126.381 21.6225 126.832 21.2357C127.283 20.8311 127.585 20.3551 127.746 19.8078L130.559 20.7538C130.268 21.8545 129.645 22.7946 128.683 23.5859C127.722 24.3773 126.505 24.77 125.027 24.77C123.265 24.77 121.781 24.175 120.576 22.979C119.389 21.7653 118.796 20.2599 118.796 18.4512C118.796 16.6246 119.383 15.1192 120.552 13.9233C121.739 12.7274 123.199 12.1324 124.926 12.1324C126.434 12.1324 127.668 12.5251 128.63 13.3164C129.591 14.0899 130.209 15.0359 130.482 16.1486L127.621 17.1184C127.241 15.7737 126.369 15.1073 125.004 15.1073Z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_347_68333">
            <rect
              transform="translate(0.228333 3.987)"
              fill="white"
              height="25.763"
              width="130.33"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
