// Next
import Image from "next/image";
import Link from "next/link";

// Components
import Newsletter from "../../components/newsletter/Newsletter";

// Styles
import styles from "./footer.module.scss";

// CLSX
import clsx from "clsx";

// Constants
import { FOOTER_ITEMS } from "@/app/constants/footerItems";

export default function Footer() {
  return (
    <footer className={clsx(styles.footer, "mt-2 grid gap-2")}>
      <Newsletter />
      <div className={clsx("grid grid-cols-2 gap-2", styles.footer__lotties)}>
        <div className="p-2 rounded-[32px] bg-orange aspect-sqquare">
          <video src="/videos/Reown_Appkit.webm" autoPlay muted></video>
        </div>
        <div className="p-2 rounded-[32px] bg-yellow aspect-square">
          <video src="/videos/Reown_Walletkit.webm" autoPlay muted></video>
        </div>
      </div>
      {FOOTER_ITEMS.map((footer_item, index) => (
        <div
          key={index}
          className={clsx(
            "rounded-[32px] bg-white p-8",
            styles[`footer__item-${index + 1}`]
          )}
        >
          <p>{footer_item.title}</p>
          <ul>
            {footer_item.links.map(({ label, url }, index) => (
              <li key={index}>
                <Link href={url}>label</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={clsx(styles.footer__logo)}>
        <Image
          className="w-full"
          src={"/ReownLogo.svg"}
          width={180}
          height={48}
          alt="Reown's Beautiful Logo"
        />
      </div>
    </footer>
  );
}
