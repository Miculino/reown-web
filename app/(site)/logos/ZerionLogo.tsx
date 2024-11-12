// React
import { SVGProps } from "react";

interface ZerionLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function ZerionLogo({ className, ...props }: ZerionLogoProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 93 32"
        {...props}
      >
        <g clip-path="url(#clip0_347_68366)">
          <mask
            height="25"
            width="93"
            y="3"
            x="0"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "luminance" }}
            id="mask0_347_68366"
          >
            <path fill="white" d="M93 3.487H0V27.513H93V3.487Z"></path>
          </mask>
          <g mask="url(#mask0_347_68366)">
            <path
              fill="#363636"
              d="M54.5547 5.87221C54.5547 7.19364 53.4552 8.25742 52.1307 8.25742C50.7729 8.25742 49.6433 7.19364 49.6433 5.87221C49.6433 4.55078 50.7729 3.487 52.1307 3.487C53.4568 3.487 54.5547 4.55078 54.5547 5.87221ZM53.6485 27.0198H50.5464C50.2881 27.0198 50.1265 26.8586 50.1265 26.601V11.3192C50.1265 11.0615 50.2881 10.9003 50.5464 10.9003H53.6485C53.9384 10.9003 54.0683 11.0615 54.0683 11.3192V26.601C54.0683 26.8586 53.9067 27.0198 53.6485 27.0198ZM20.3222 17.2197H28.239C28.4323 17.2197 28.5622 17.0917 28.529 16.8973C28.239 15.0274 26.4297 13.7059 24.1673 13.7059C21.9714 13.7059 20.2255 15.0274 19.9673 16.8657C19.934 17.0585 20.0956 17.2197 20.3222 17.2197ZM15.9589 18.8636C15.9589 14.06 19.4492 10.5462 24.199 10.5462C28.8205 10.5462 32.6324 13.6743 32.3076 19.5054C32.3076 19.861 32.0494 20.1187 31.6612 20.1187H20.2224C19.9958 20.1187 19.8991 20.2799 19.9308 20.5059C20.0924 22.5703 21.9667 24.1494 24.2608 24.1494C25.9418 24.1494 27.3629 23.3764 28.0743 22.0866C28.1725 21.8606 28.3008 21.7641 28.5274 21.7641H31.5978C31.8561 21.7641 32.0177 21.957 31.921 22.2794C30.9847 25.3111 28.0109 27.3739 24.5539 27.3739C19.4809 27.3739 15.9589 23.8933 15.9589 18.8636ZM13.4082 27.0198H0.418275C0.16003 27.0198 -0.00157278 26.8586 1.15439e-05 26.5994V24.6978C1.15439e-05 24.4402 0.0649685 24.1826 0.258256 23.9565L8.27179 14.6069C8.43339 14.4125 8.30506 14.1548 8.0785 14.1548H0.678105C0.419859 14.1548 0.258256 13.9936 0.258256 13.736V11.3176C0.258256 11.0599 0.419859 10.8987 0.678105 10.8987H13.1182C13.3765 10.8987 13.5381 11.0599 13.5381 11.3176V13.1559C13.5381 13.4783 13.4414 13.7044 13.2149 13.962L5.16809 23.3116C5.00649 23.506 5.16809 23.7637 5.39465 23.7637H13.4082C13.6664 23.7637 13.828 23.9249 13.828 24.1826V26.601C13.828 26.8586 13.6664 27.0198 13.4082 27.0198ZM46.2956 10.9018H44.1631C42.1922 10.9018 40.9311 11.6116 40.253 13.1258C40.0597 13.5447 39.5099 13.4483 39.5099 13.0294V11.3207C39.5099 11.0631 39.3483 10.9018 39.0901 10.9018H36.3762C36.1179 10.9018 35.9563 11.0631 35.9563 11.3207V26.6025C35.9563 26.8602 36.1179 27.0214 36.3762 27.0214H39.4783C39.7698 27.0214 39.8981 26.8286 39.8981 26.6025V15.7055C39.8981 15.3182 40.1896 14.9325 40.6095 14.9325H46.2972C46.5555 14.9325 46.7171 14.7713 46.7171 14.5137V11.3223C46.7155 11.0631 46.5539 10.9018 46.2956 10.9018ZM65.8732 23.9897C63.1909 23.9897 61.2849 21.8621 61.2849 18.8952C61.2849 15.9931 63.1909 13.9304 65.8732 13.9304C68.5554 13.9304 70.4946 15.9931 70.4946 18.8952C70.4946 21.8621 68.5554 23.9897 65.8732 23.9897ZM65.9064 27.3755C70.8828 27.3755 74.4364 23.8285 74.4364 18.8652C74.4364 14.03 70.8812 10.5478 65.9064 10.5478C60.8984 10.5478 57.3114 14.03 57.3114 18.8652C57.3114 23.8285 60.8968 27.3755 65.9064 27.3755ZM92.9873 17.1549V26.601C92.9873 26.8586 92.8257 27.0198 92.5691 27.0198H89.467C89.2087 27.0198 89.0471 26.8586 89.0471 26.601V17.8646C89.0471 15.3498 87.786 13.932 85.5568 13.932C82.9712 13.932 81.5818 15.4146 81.5818 18.2835V26.601C81.5818 26.8586 81.4202 27.0198 81.1619 27.0198H78.0598C77.8016 27.0198 77.6399 26.8586 77.6399 26.601V11.3191C77.6399 11.0615 77.8016 10.9003 78.0598 10.9003H80.7737C81.032 10.9003 81.1936 11.0615 81.1936 11.3523V12.5773C81.1936 12.9646 81.5818 13.061 81.84 12.7386C82.9379 11.3191 84.6506 10.5462 86.6865 10.5462C90.435 10.5462 92.9873 12.8666 92.9873 17.1549Z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_347_68366">
            <rect
              transform="translate(0 3.487)"
              fill="white"
              height="24.026"
              width="93"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
