// Components
import Newsletter from "../../components/Newsletter";

// Styles
import styles from "./footer.module.scss";

// CLSX
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className={clsx(styles.footer, "mt-2")}>
      <Newsletter />
      <div className="p-2 rounded-[32px] bg-orange aspect-sqquare">
        <video src="/videos/Reown_Appkit.webm" autoPlay muted></video>
      </div>
      <div className="p-2 rounded-[32px] bg-yellow aspect-square">
        <video src="/videos/Reown_Walletkit.webm" autoPlay muted></video>
      </div>
    </footer>
  );
}
