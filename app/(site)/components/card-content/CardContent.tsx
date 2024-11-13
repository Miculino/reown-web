// Styles
import styles from "./card-content.module.scss";

// Components
import Button from "../Button";

// CLSX
import clsx from "clsx";

interface CardContentProps {
  tag: string;
  title: string;
  description: string;
  mainBtnLabel?: string;
  mainBtnURL: string;
  headline: string;
}

export default function CardContent({
  tag,
  title,
  headline,
  description,
  mainBtnLabel = "Learn more",
  mainBtnURL,
}: CardContentProps) {
  return (
    <div className={`${styles.card__content}`}>
      {title && <p className={clsx(styles.card__title, "text-4xl")}>{title}</p>}
      {tag && (
        <span className={clsx("text-xs text-gray-400", styles.card__tag)}>
          {tag}
        </span>
      )}
      <h1
        className={clsx(
          "text-lg md:text-3xl lg:text-lg text-black max-w-[17rem]",
          styles.card__headline
        )}
      >
        {headline}
      </h1>
      <p
        className={clsx(
          "text-[#BBBBBB] text-sm max-w-80 ml-8",
          styles.card__description
        )}
      >
        {description}
      </p>
      <div className={clsx("flex items-center gap-1", styles.card__ctas)}>
        <Button href={mainBtnURL}>{mainBtnLabel}</Button>

        <Button
          color={"dark-gray"}
          intent={"outline"}
          href="https://docs.reown.com"
        >
          Docs
        </Button>
      </div>
    </div>
  );
}
