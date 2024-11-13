// Styles
import styles from "./articles.module.scss";

// CLSX
import clsx from "clsx";

export default function Articles() {
  return <section className={clsx(styles.articles)}>Articles</section>;
}
