// React
import { SVGProps } from "react";

interface UniswapLogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export default function UniswapLogo({ className, ...props }: UniswapLogoProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 112 32"
        {...props}
      >
        <path
          fill="#363636"
          d="M8.68539 4.55354C8.33627 4.4997 8.32156 4.49338 8.48585 4.46827C8.80068 4.42014 9.54408 4.48575 10.0564 4.60686C11.2524 4.88951 12.3407 5.61359 13.5022 6.89956L13.8109 7.24119L14.2523 7.17063C16.1122 6.87345 18.0043 7.10964 19.5869 7.83652C20.0222 8.0365 20.7087 8.43457 20.7944 8.53686C20.8218 8.56947 20.8719 8.77933 20.906 9.00327C21.0234 9.77798 20.9646 10.3718 20.7263 10.8153C20.5966 11.0567 20.5893 11.1332 20.6765 11.3398C20.7461 11.5046 20.9403 11.6266 21.1323 11.6263C21.5256 11.6258 21.9489 10.9937 22.1451 10.1142L22.223 9.76482L22.3773 9.93864C23.2239 10.8923 23.8887 12.1928 24.0031 13.1185L24.0328 13.3599L23.8904 13.1405C23.6455 12.7629 23.3995 12.5059 23.0844 12.2986C22.5164 11.9249 21.9159 11.7977 20.3253 11.7144C18.8888 11.6391 18.0758 11.5171 17.2696 11.2558C15.8981 10.8111 15.2067 10.219 13.5774 8.0936C12.8537 7.14957 12.4064 6.62726 11.9615 6.20664C10.9505 5.2509 9.95705 4.74966 8.68539 4.55354Z"
        ></path>
        <path
          fill="#363636"
          d="M21.1187 6.66094C21.1548 6.02835 21.2411 5.61112 21.4146 5.23007C21.4833 5.07924 21.5477 4.9558 21.5575 4.9558C21.5675 4.9558 21.5376 5.06713 21.4912 5.20317C21.3651 5.57298 21.3444 6.07878 21.4312 6.66727C21.5415 7.41394 21.6043 7.52168 22.398 8.32826C22.7703 8.70658 23.2034 9.18372 23.3603 9.38857L23.6457 9.76106L23.3603 9.49486C23.0113 9.16933 22.2085 8.53446 22.0312 8.44372C21.9122 8.38285 21.8945 8.3839 21.8212 8.45648C21.7537 8.52337 21.7394 8.62386 21.73 9.09895C21.7154 9.83939 21.6139 10.3146 21.3689 10.7899C21.2364 11.0469 21.2156 10.992 21.3354 10.7019C21.4249 10.4853 21.434 10.3901 21.4333 9.67329C21.432 8.23307 21.2601 7.88683 20.2515 7.2937C19.9961 7.14344 19.5751 6.92674 19.3161 6.81212C19.0571 6.69749 18.8513 6.59765 18.8588 6.5902C18.8874 6.56194 19.8709 6.84736 20.2667 6.99875C20.8556 7.22397 20.9528 7.25315 21.0244 7.22599C21.0722 7.20777 21.0954 7.06897 21.1187 6.66094Z"
        ></path>
        <path
          fill="#363636"
          d="M9.36393 9.12487C8.6552 8.15473 8.21669 6.6673 8.31163 5.55537L8.34098 5.21127L8.50231 5.24055C8.80526 5.29549 9.32761 5.4888 9.57221 5.63651C10.2434 6.04182 10.5339 6.57545 10.8296 7.94572C10.9162 8.34707 11.0299 8.80127 11.0821 8.95504C11.1663 9.20254 11.4843 9.78067 11.7429 10.1561C11.9291 10.4265 11.8053 10.5547 11.3937 10.5177C10.7649 10.4613 9.91333 9.8769 9.36393 9.12487Z"
        ></path>
        <path
          fill="#363636"
          d="M20.2595 16.3452C16.9474 15.0193 15.7808 13.8683 15.7808 11.9265C15.7808 11.6407 15.7908 11.4069 15.8028 11.4069C15.8149 11.4069 15.943 11.5012 16.0876 11.6165C16.7592 12.1521 17.5113 12.3808 19.5933 12.6829C20.8185 12.8606 21.508 13.0041 22.1441 13.2138C24.1656 13.8804 25.4163 15.2332 25.7146 17.0757C25.8012 17.6111 25.7504 18.6151 25.6099 19.1443C25.4989 19.5623 25.1605 20.3156 25.0707 20.3444C25.0458 20.3525 25.0214 20.2576 25.015 20.1286C24.9809 19.4367 24.6292 18.7632 24.0387 18.2586C23.3673 17.6849 22.4652 17.2282 20.2595 16.3452Z"
        ></path>
        <path
          fill="#363636"
          d="M17.934 16.8961C17.8926 16.6507 17.8206 16.3371 17.7741 16.1993L17.6896 15.949L17.8466 16.1242C18.0638 16.3666 18.2355 16.6768 18.381 17.09C18.492 17.4054 18.5045 17.4991 18.5036 18.0115C18.5028 18.5146 18.4889 18.6201 18.3864 18.904C18.2248 19.3515 18.024 19.6689 17.6874 20.0095C17.0824 20.6217 16.3046 20.9607 15.182 21.1013C14.9869 21.1258 14.4182 21.1669 13.9183 21.1927C12.6583 21.2579 11.829 21.3925 11.084 21.6526C10.9768 21.6901 10.8812 21.7128 10.8715 21.7032C10.8413 21.6732 11.3487 21.3725 11.7676 21.1719C12.3585 20.8889 12.9467 20.7345 14.2646 20.5163C14.9155 20.4085 15.5877 20.2777 15.7585 20.2257C17.3706 19.7342 18.1993 18.466 17.934 16.8961Z"
        ></path>
        <path
          fill="#363636"
          d="M19.4523 19.5767C19.0123 18.6361 18.9112 17.728 19.1523 16.8811C19.1781 16.7907 19.2195 16.7166 19.2445 16.7166C19.2695 16.7166 19.3733 16.7724 19.4753 16.8406C19.678 16.9763 20.0847 17.2049 21.1683 17.7923C22.5204 18.5252 23.2912 19.0927 23.8154 19.7412C24.2746 20.3091 24.5587 20.9558 24.6954 21.7444C24.7729 22.1912 24.7275 23.2661 24.6121 23.716C24.2487 25.1344 23.4037 26.2486 22.1987 26.8987C22.0222 26.994 21.8636 27.0721 21.8464 27.0725C21.8293 27.0729 21.8936 26.9103 21.9895 26.7111C22.3948 25.8685 22.441 25.0489 22.1345 24.1367C21.9469 23.5781 21.5642 22.8966 20.7917 21.7447C19.8935 20.4055 19.6733 20.049 19.4523 19.5767Z"
        ></path>
        <path
          fill="#363636"
          d="M7.01216 24.6519C8.24125 23.62 9.77053 22.887 11.1636 22.662C11.7639 22.565 12.764 22.6035 13.3199 22.745C14.2111 22.9717 15.0083 23.4796 15.4227 24.0847C15.828 24.6761 16.0017 25.1914 16.1827 26.338C16.2541 26.7903 16.3318 27.2444 16.3552 27.3473C16.4911 27.9415 16.7556 28.4165 17.0833 28.655C17.6039 29.0338 18.5002 29.0575 19.382 28.7154C19.5316 28.6574 19.6615 28.6172 19.6707 28.6263C19.7027 28.6579 19.2586 28.9535 18.9454 29.109C18.524 29.3183 18.1889 29.3992 17.7435 29.3992C16.9358 29.3992 16.2654 28.9908 15.7059 28.1578C15.5959 27.994 15.3484 27.503 15.1561 27.0669C14.5654 25.7274 14.2737 25.3193 13.5879 24.8727C12.991 24.4841 12.2213 24.4145 11.6422 24.6968C10.8815 25.0676 10.6693 26.0341 11.2141 26.6466C11.4307 26.89 11.8344 27.1 12.1645 27.1408C12.7823 27.2172 13.3131 26.7499 13.3131 26.1299C13.3131 25.7274 13.1574 25.4975 12.7656 25.3218C12.2306 25.0817 11.6553 25.3623 11.6581 25.8621C11.6593 26.0753 11.7526 26.2091 11.9675 26.3058C12.1054 26.3678 12.1085 26.3727 11.9961 26.3495C11.5051 26.2483 11.3901 25.6598 11.7849 25.269C12.2589 24.7999 13.239 25.0069 13.5756 25.6472C13.7169 25.9161 13.7334 26.4517 13.6101 26.7751C13.3342 27.499 12.5297 27.8796 11.7137 27.6724C11.158 27.5315 10.9318 27.3787 10.2619 26.6927C9.09786 25.5004 8.64596 25.2694 6.96782 25.009L6.64624 24.9591L7.01216 24.6519Z"
        ></path>
        <path
          fill="#363636"
          d="M1.55029 3.31393C5.43762 8.00501 8.11503 9.94046 8.41257 10.3494C8.65822 10.687 8.56577 10.9906 8.14491 11.2284C7.91087 11.3607 7.42971 11.4947 7.1888 11.4947C6.91631 11.4947 6.82276 11.3902 6.82276 11.3902C6.66477 11.2412 6.57579 11.2673 5.76446 9.83538C4.63806 8.09758 3.69542 6.656 3.6697 6.63186C3.61024 6.57605 3.61126 6.57793 5.6496 10.2042C5.97894 10.96 5.71511 11.2374 5.71511 11.3451C5.71511 11.564 5.65503 11.6791 5.38334 11.9804C4.93042 12.4828 4.72796 13.0473 4.58181 14.2155C4.41795 15.5251 3.95723 16.4502 2.68044 18.0334C1.93304 18.9601 1.81075 19.1301 1.62216 19.5036C1.38461 19.974 1.3193 20.2375 1.29282 20.8315C1.26484 21.4594 1.31934 21.8652 1.51231 22.4657C1.68126 22.9913 1.85761 23.3385 2.30845 24.0327C2.69751 24.6319 2.92153 25.0771 2.92153 25.2513C2.92153 25.39 2.94813 25.3901 3.55101 25.2548C4.99379 24.9308 6.16532 24.3611 6.82421 23.6629C7.23198 23.2307 7.32772 22.9921 7.33082 22.3999C7.33286 22.0124 7.31916 21.9314 7.21385 21.7086C7.04242 21.3458 6.73034 21.0443 6.0425 20.5767C5.14124 19.9641 4.75629 19.471 4.64996 18.7928C4.56273 18.2362 4.66393 17.8436 5.16251 16.8047C5.67858 15.7292 5.80645 15.2709 5.89297 14.1869C5.94885 13.4866 6.02622 13.2104 6.2286 12.9887C6.43967 12.7575 6.62968 12.6792 7.15204 12.6082C8.00364 12.4926 8.5459 12.2735 8.99164 11.8651C9.3783 11.5108 9.5401 11.1695 9.56494 10.6556L9.58379 10.2661L9.36771 10.0156C8.58519 9.10843 1.02624 2.60081 0.978081 2.60081C0.967793 2.60081 1.2253 2.92174 1.55029 3.31393ZM3.36079 21.542C3.53771 21.2306 3.44371 20.83 3.14776 20.6344C2.86814 20.4495 2.43376 20.5366 2.43376 20.7775C2.43376 20.851 2.47464 20.9046 2.56678 20.9516C2.72194 21.0311 2.7332 21.1203 2.61113 21.3028C2.4875 21.4875 2.49747 21.65 2.63928 21.7604C2.86783 21.9382 3.19135 21.8404 3.36079 21.542Z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
        <path
          fill="#363636"
          d="M10.1213 12.8127C9.72151 12.9348 9.33289 13.356 9.21259 13.7978C9.1392 14.0672 9.18083 14.54 9.29076 14.686C9.46835 14.9218 9.64009 14.9839 10.1051 14.9807C11.0156 14.9744 11.807 14.5862 11.8991 14.1008C11.9745 13.7029 11.6268 13.1516 11.148 12.9095C10.901 12.7846 10.3755 12.7351 10.1213 12.8127ZM11.1856 13.6401C11.326 13.4417 11.2646 13.2275 11.0258 13.0824C10.5711 12.8064 9.88341 13.0348 9.88341 13.4619C9.88341 13.6745 10.242 13.9065 10.5707 13.9065C10.7895 13.9065 11.0889 13.7769 11.1856 13.6401Z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
        <path
          fill="#363636"
          d="M101.256 28.3027V14.1494H103.298V15.7544C103.861 14.8373 104.945 13.8992 106.759 13.8992C109.468 13.8992 111.428 16.0463 111.428 19.2979C111.428 22.5496 109.468 24.6966 106.759 24.6966C104.903 24.6966 103.84 23.7169 103.319 22.8831V28.3027H101.256ZM106.279 23.0499C108.301 23.0499 109.281 21.3615 109.281 19.2979C109.281 17.2344 108.301 15.546 106.279 15.546C104.257 15.546 103.236 17.2761 103.236 19.2979C103.236 21.3198 104.257 23.0499 106.279 23.0499Z"
        ></path>
        <path
          fill="#363636"
          d="M93.5549 24.6966C91.6997 24.6966 90.0321 23.571 90.0321 21.6533C90.0321 19.7774 91.3453 18.9227 93.5757 18.4851L94.993 18.1932C96.0979 17.9639 96.6189 17.7346 96.6189 16.88C96.6189 16.0254 95.9103 15.4209 94.6596 15.4209C93.3047 15.4209 92.4292 16.2546 92.3459 17.6304L90.2197 17.4427C90.3656 15.2333 92.1375 13.8992 94.6805 13.8992C97.3069 13.8992 98.7033 15.1707 98.7033 17.3386V24.4465H96.7232V23.2375H96.7023C96.2229 24.0296 95.1598 24.6966 93.5549 24.6966ZM94.0968 23.2167C95.5559 23.2167 96.7023 22.2579 96.7023 20.5486V19.2979C94.5345 19.6523 93.5132 19.9441 92.8878 20.3401C92.4085 20.632 92.1375 21.0488 92.1375 21.6116C92.1375 22.5704 92.9295 23.2167 94.0968 23.2167Z"
        ></path>
        <path
          fill="#363636"
          d="M76.768 24.4467L73.4954 14.1497H75.6841L77.9353 21.9246H77.9561L80.2906 14.1497H82.3542L84.7096 21.9037H84.7304L86.9816 14.1497H89.1286L85.856 24.4467H83.6882L81.3537 16.5051H81.3328L78.9566 24.4467H76.768Z"
        ></path>
        <path
          fill="#363636"
          d="M68.4446 24.6966C65.8807 24.6966 64.0047 23.5085 63.7754 21.0488L65.8182 20.7987C65.9224 22.4245 67.0689 23.175 68.4863 23.175C69.8829 23.175 70.8208 22.5496 70.8208 21.5491C70.8208 20.5486 69.862 20.3401 68.5697 20.0483L67.048 19.694C65.3804 19.2979 64.234 18.5059 64.234 16.9217C64.234 15.1707 65.9641 13.8992 68.4029 13.8992C70.7583 13.8992 72.3633 15.0874 72.6342 17.0051L70.5707 17.2969C70.4248 16.0671 69.5285 15.4209 68.3195 15.4209C67.0897 15.4209 66.2976 16.0254 66.2976 16.8175C66.2976 17.5678 66.7562 17.8388 68.0485 18.1307L69.5702 18.4851C71.7379 18.9852 72.8844 19.694 72.8844 21.3406C72.8844 23.4043 70.9668 24.6966 68.4446 24.6966Z"
        ></path>
        <path
          fill="#363636"
          d="M59.9327 24.4464V14.1493H61.9964V24.4464H59.9327ZM59.9327 12.5443V10.1055H61.9964V12.5443H59.9327Z"
        ></path>
        <path
          fill="#363636"
          d="M48.3959 24.4465V14.1494H50.4386V15.6085H50.4595C51.0432 14.7122 52.1896 13.8992 53.7529 13.8992C56.0458 13.8992 57.4007 15.275 57.4007 17.7763V24.4465H55.337V18.6726C55.337 16.8175 54.9202 15.6294 53.1901 15.6294C51.46 15.6294 50.4595 17.0259 50.4595 18.6934V24.4465H48.3959Z"
        ></path>
        <path
          fill="#363636"
          d="M40.3712 24.6965C36.9527 24.6965 34.8682 22.7579 34.8682 19.1936V10.1055H37.0361V19.0685C37.0361 21.3822 38.12 22.883 40.3712 22.883C42.8099 22.883 43.7062 21.3822 43.7062 19.0685V10.1055H45.8741V19.1936C45.8741 22.7579 43.7896 24.6965 40.3712 24.6965Z"
        ></path>
      </svg>
    </div>
  );
}
