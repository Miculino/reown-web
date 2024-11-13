// Next
import Link from "next/link";
import Image from "next/image";

// Components
import Button from "./Button";

// Icons
import ArrowIcon from "../icons/Arrow";

export default function ArticleCard() {
  return (
    <div className="overflow-hidden rounded-[40px]">
      <div className="bg-gray-100 p-10 pb-20">
        <div className="flex justify-between text-xs">
          <time dateTime="2024-09-16T10:00:00.000Z">09.16.2024</time>
          <p>Company update</p>
        </div>
        <div>
          <Link href={"https://reown.com/blog/walletconnect-is-now-reown"}>
            <h3 className="mt-3 text-[32px] line-clamp-2 leading-[1]">
              Meet Reown: the onchain UX platform
            </h3>
          </Link>
          <Button
            className="mt-8"
            color={"dark-gray"}
            href="https://reown.com/blog/walletconnect-is-now-reown"
          >
            <ArrowIcon width={35} height={32} />
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={"/illustrations/Renown.png"}
          width={2400}
          height={1260}
          alt=""
        />
      </div>
    </div>
  );
}
