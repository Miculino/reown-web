// Next
import Link from "next/link";
import Image from "next/image";

// Components
import Button from "./Button";

// Icons
import ArrowIcon from "../icons/Arrow";

interface ArticleCardProps {
  date: string;
  title: string;
  category: string;
  link: string;
  thumbnail: string;
}

export default function ArticleCard({
  date,
  title,
  category,
  link,
  thumbnail,
}: ArticleCardProps) {
  return (
    <div className="overflow-hidden rounded-[40px]">
      <div className="bg-gray-100 p-10 pb-20">
        <div className="flex justify-between text-xs">
          <time dateTime={new Date(date).toISOString()}>{date}</time>
          <p>{category}</p>
        </div>
        <div>
          <Link
            href={`https://reown.com/blog/
https://reown.com/blog/${link}`}
          >
            <h3 className="mt-3 text-[32px] line-clamp-2 leading-[1]">
              {title}
            </h3>
          </Link>
          <Button
            className="mt-8"
            color={"dark-gray"}
            href={`https://reown.com/blog/
https://reown.com/blog/${link}`}
          >
            <ArrowIcon width={35} height={32} />
          </Button>
        </div>
      </div>
      <div>
        <Image src={thumbnail} width={2400} height={1260} alt={title} />
      </div>
    </div>
  );
}
