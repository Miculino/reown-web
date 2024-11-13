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
    </footer>
  );
}
