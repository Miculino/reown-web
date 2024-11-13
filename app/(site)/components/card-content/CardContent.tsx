// Styles
import styles from "./card-content.module.scss";

// Components
import Button from "../Button";

interface CardContentProps {
  tag: string;
  title: string;
  description: string;
  mainBtnLabel: string;
  mainBtnURL: string;
}

export default function CardContent({
  tag,
  title,
  description,
  mainBtnLabel,
  mainBtnURL,
}: CardContentProps) {
  return (
    <div className={`flex flex-col gap-4 ${styles.card_content}`}>
      {tag && <span>{tag}</span>}
      <h1 className="text-lg md:text-3xl text-white">{title}</h1>
      <p className="text-[#BBBBBB] text-base max-w-80 ml-8">{description}</p>
      <div className="flex items-center gap-1">
        <Button href={mainBtnURL}>{mainBtnLabel}</Button>

        <Button intent={"outline"} href="https://docs.reown.com">
          Docs
        </Button>
      </div>
    </div>
  );
}
