// Components
import ArticleCard from "../../components/ArticleCard";
import Button from "../../components/Button";

// Styles
import styles from "./articles.module.scss";

// CLSX
import clsx from "clsx";

// Blog
import { articles } from "../../blog/articles";

export default function Articles() {
  return (
    <section className={clsx(styles.articles, "mt-16")}>
      <h2 className="text-lg md:text-3xl text-gray-600 ml-14 mb-4">Articles</h2>
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
      <div className="flex items-center justify-center mt-6">
        <Button
          className="text-white"
          href="https://reown.com/blog"
          intent={"secondary"}
        >
          More Articles
        </Button>
      </div>
    </section>
  );
}
