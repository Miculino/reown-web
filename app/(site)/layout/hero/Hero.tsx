// Next
import Link from "next/link";

// SCSS
import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className="">
      <div
        className={`rounded-full relative h-[85vh] overflow-hidden ${styles.hero__video_container}`}
      >
        <video
          className="absolute h-full w-full object-cover"
          src="/videos/Hero.webm"
          loop
          autoPlay
          muted
        />
        <div
          className={`grid grid-cols-12 h-full w-full relative z-10 ${styles.hero__grid}`}
        >
          <div className={`flex flex-col gap-2 ${styles.hero__grid_content}`}>
            <h1 className="text-3xl text-white">
              Toolkits to build onchain UX
            </h1>
            <p className="text-[#BBBBBB]">
              Reown gives developers the tools to build user experiences that
              make digital ownership effortless, intuitive, and secure.
            </p>
            <div>
              <Link href={"https://cloud.reown.com/sign-up"} target="_blank">
                Start building
              </Link>
              <Link href={"https://docs.reown.com"} target="_blank">
                Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
