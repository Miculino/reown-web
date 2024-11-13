// Styles
import styles from "./hero.module.scss";

// Components
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section>
      <div
        className={`rounded-[100px] xl:rounded-full relative h-[85vh] overflow-hidden ${styles.hero__video_container}`}
      >
        <video
          className="absolute h-full w-full object-cover object-center"
          src="/videos/Hero.webm"
          loop
          autoPlay
          muted
        />
        <div
          className={`grid grid-cols-12 h-full w-full relative z-10 ${styles.hero__grid}`}
        >
          <div className={`flex flex-col gap-4 ${styles.hero__grid_content}`}>
            <h1 className="text-lg md:text-3xl text-white">
              Toolkits to build onchain UX
            </h1>
            <p className="text-[#BBBBBB] text-base max-w-80 ml-8">
              Reown gives developers the tools to build user experiences that
              make digital ownership effortless, intuitive, and secure.
            </p>
            <div className="flex items-center gap-1">
              <Button href="https://cloud.reown.com/app">Start building</Button>

              <Button intent={"outline"} href="https://docs.reown.com">
                Docs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
