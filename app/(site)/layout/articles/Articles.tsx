// Components
import ArticleCard from "../../components/ArticleCard";

// Styles
import styles from "./articles.module.scss";

// CLSX
import clsx from "clsx";

export default function Articles() {
  return (
    <section className={clsx(styles.articles)}>
      <h2>Articles</h2>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
}
