// Styles
import styles from "./onchain-cta.module.scss";

// Components
import Button from "../../components/Button";
import GridLottie from "../../components/grid-lottie/GridLottie";

// CLSX
import clsx from "clsx";

export default function OnchainCTA() {
  return (
    <section>
      <div
        className={`rounded-[100px] p-8 mt-16 bg-dark-gray xl:rounded-full relative overflow-hidden ${styles.onchain_cta__container}`}
      >
        <div className={clsx(styles.onchain_cta__lottie)}>
          <GridLottie />
        </div>
        <div
          className={`grid grid-cols-6 mt-16 md:mt-0 md:grid-cols-12 h-full w-full relative z-10 ${styles.onchain_cta__grid}`}
        >
          <div className={clsx(styles.onchain_cta__headline, "flex")}>
            <div className="my-auto sm:w-[25em]">
              <h2 className="text-4xl text-white">
                Building the onchain UX platform
              </h2>
            </div>
          </div>
          <div
            className={`flex flex-col mt-4 gap-4 ${styles.onchain_cta__content}`}
          >
            <h1 className="text-lg  text-white">Build with reown.</h1>
            <p className="text-[#BBBBBB] text-base max-w-80 ml-8">
              Make digital ownership effortless, intuitive, and secure. Start
              building with Reown and create unparalleled user experiences
              today.
            </p>
            <div className="flex items-center gap-1">
              <Button href="https://cloud.reown.com/app">Build for free</Button>

              <Button
                color={"blue"}
                intent={"outline"}
                href="https://docs.reown.com"
              >
                Docs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
