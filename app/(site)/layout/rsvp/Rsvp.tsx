import Button from "../../components/Button";

export default function Rsvp() {
  return (
    <section className="bg-blue p-5 rounded-[40px] md:rounded-full mt-2">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
        <p className="flex-wrap">
          From Telegram to Bitcoin - discover what&apos;s new and coming with
          the latest AppKit.
        </p>
        <div className="flex gap-1">
          <Button
            intent={"secondary"}
            href="https://reown.com/blog/new-appkit-for-bitcoin-and-telegram"
          >
            Learn more
          </Button>
          <Button color={"dark-gray"} intent={"outline"}>
            X
          </Button>
        </div>
      </div>
    </section>
  );
}
