// React
import { SVGProps } from "react";

interface OKXLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function OKXLogo({ className, ...props }: OKXLogoProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 72 32"
        {...props}
      >
        <path
          fill="#363636"
          d="M21.2934 5.25H0.75158C0.624896 5.25 0.503395 5.3003 0.413853 5.38994C0.324215 5.47949 0.273926 5.60101 0.273926 5.7278V26.2718C0.273926 26.3985 0.324215 26.52 0.413853 26.6096C0.503395 26.6992 0.624896 26.7495 0.75158 26.7495H21.2934C21.4202 26.7495 21.5417 26.6992 21.6313 26.6096C21.7209 26.52 21.7712 26.3985 21.7712 26.2718V5.7278C21.7712 5.60101 21.7209 5.47949 21.6313 5.38994C21.5417 5.3003 21.4202 5.25 21.2934 5.25ZM14.6054 19.1053C14.6054 19.232 14.5551 19.3535 14.4655 19.4431C14.3759 19.5327 14.2544 19.5831 14.1278 19.5831H7.91737C7.79068 19.5831 7.66918 19.5327 7.57955 19.4431C7.49 19.3535 7.43971 19.232 7.43971 19.1053V12.8942C7.43971 12.7675 7.49 12.646 7.57955 12.5565C7.66918 12.4668 7.79068 12.4165 7.91737 12.4165H14.1278C14.2544 12.4165 14.3759 12.4668 14.4655 12.5565C14.5551 12.646 14.6054 12.7675 14.6054 12.8942V19.1053Z"
        ></path>
        <path
          fill="#363636"
          d="M64.2999 12.4173H58.0896C57.8258 12.4173 57.6118 12.6312 57.6118 12.895V19.106C57.6118 19.3699 57.8258 19.5838 58.0896 19.5838H64.2999C64.5637 19.5838 64.7776 19.3699 64.7776 19.106V12.895C64.7776 12.6312 64.5637 12.4173 64.2999 12.4173Z"
        ></path>
        <path
          fill="#363636"
          d="M57.1311 5.25058H50.9208C50.657 5.25058 50.4431 5.46443 50.4431 5.72838V11.9393C50.4431 12.2032 50.657 12.4171 50.9208 12.4171H57.1311C57.395 12.4171 57.6088 12.2032 57.6088 11.9393V5.72838C57.6088 5.46443 57.395 5.25058 57.1311 5.25058Z"
        ></path>
        <path
          fill="#363636"
          d="M71.4629 5.25058H65.2525C64.9886 5.25058 64.7747 5.46443 64.7747 5.72838V11.9393C64.7747 12.2032 64.9886 12.4171 65.2525 12.4171H71.4629C71.7267 12.4171 71.9405 12.2032 71.9405 11.9393V5.72838C71.9405 5.46443 71.7267 5.25058 71.4629 5.25058Z"
        ></path>
        <path
          fill="#363636"
          d="M57.1311 19.5835H50.9208C50.657 19.5835 50.4431 19.7973 50.4431 20.0612V26.2722C50.4431 26.536 50.657 26.75 50.9208 26.75H57.1311C57.395 26.75 57.6088 26.536 57.6088 26.2722V20.0612C57.6088 19.7973 57.395 19.5835 57.1311 19.5835Z"
        ></path>
        <path
          fill="#363636"
          d="M71.4629 19.5835H65.2525C64.9886 19.5835 64.7747 19.7973 64.7747 20.0612V26.2722C64.7747 26.536 64.9886 26.75 65.2525 26.75H71.4629C71.7267 26.75 71.9405 26.536 71.9405 26.2722V20.0612C71.9405 19.7973 71.7267 19.5835 71.4629 19.5835Z"
        ></path>
        <path
          fill="#363636"
          d="M46.3736 5.25058H40.1634C39.8995 5.25058 39.6856 5.46443 39.6856 5.72838V11.9393C39.6856 12.2032 39.8995 12.4171 40.1634 12.4171H46.3736C46.6375 12.4171 46.8514 12.2032 46.8514 11.9393V5.72838C46.8514 5.46443 46.6375 5.25058 46.3736 5.25058Z"
        ></path>
        <path
          fill="#363636"
          d="M46.3736 19.5835H40.1634C39.8995 19.5835 39.6856 19.7973 39.6856 20.0612V26.2722C39.6856 26.536 39.8995 26.75 40.1634 26.75H46.3736C46.6375 26.75 46.8514 26.536 46.8514 26.2722V20.0612C46.8514 19.7973 46.6375 19.5835 46.3736 19.5835Z"
        ></path>
        <path
          fill="#363636"
          d="M39.6856 12.8889C39.6856 12.7622 39.6353 12.6407 39.5457 12.5511C39.4561 12.4615 39.3346 12.4112 39.2079 12.4112H32.5199V5.7278C32.5199 5.60101 32.4695 5.47949 32.3799 5.38994C32.2903 5.3003 32.1688 5.25 32.0421 5.25H25.8318C25.705 5.25 25.5835 5.3003 25.494 5.38994C25.4044 5.47949 25.3541 5.60101 25.3541 5.7278V26.2611C25.3541 26.3877 25.4044 26.5093 25.494 26.5988C25.5835 26.6885 25.705 26.7388 25.8318 26.7388H32.0421C32.1688 26.7388 32.2903 26.6885 32.3799 26.5988C32.4695 26.5093 32.5199 26.3877 32.5199 26.2611V19.5777H39.2079C39.3346 19.5777 39.4561 19.5273 39.5457 19.4377C39.6353 19.3481 39.6856 19.2266 39.6856 19.0999V12.8889Z"
        ></path>
      </svg>
    </div>
  );
}
