// Components
import ArticleCard from "../../components/ArticleCard";

// Styles
import styles from "./articles.module.scss";

// CLSX
import clsx from "clsx";

// Blog
import { articles } from "../../blog/articles";

export default function Articles() {
  return (
    <section className={clsx(styles.articles)}>
      <h2>Articles</h2>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            category={article.category}
            date={article.date}
            link={article.link}
            thumbnail={article.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}
