// Next
import Link from "next/link";

// Components
import Button from "../Button";

// Styles
import styles from "./newsletter.module.scss";

// CLSX
import clsx from "clsx";

// Icons
import ArrowIcon from "../../icons/Arrow";

export default function Newsletter() {
  return (
    <div
      className={clsx(
        "bg-dark-gray rounded-[40px] p-2 pt-6",
        styles.newsletter
      )}
    >
      <div className="flex flex-col text-white gap-2 ml-6">
        <div>
          <p>Subscribe to our newsletter</p>
        </div>
        <div className="max-w-[15em]">
          <p className="text-gray-500 text-xs font-normal">
            You can unsubscribe at any time. Our Privacy Policy is available{" "}
            <Link
              className="underline"
              href={"https://reown.com/privacy-policy"}
            >
              here
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-6">
        <form className="flex w-full gap-2">
          <div className="h-20 w-full">
            <input
              className="border-0 h-full w-full rounded-[32px] bg-gray-600/50 p-2 px-6 text-3xl text-white"
              placeholder="Mail"
            />
          </div>

          <Button className="rounded-[32px]" intent={"primary"} type="submit">
            <ArrowIcon width={40} height={35} />
          </Button>
        </form>
      </div>
    </div>
  );
}
