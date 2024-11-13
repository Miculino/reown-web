// Next
import Image from "next/image";

// Components
import Card from "../../components/Card";
import CardContent from "../../components/card-content/CardContent";

// Styles
import styles from "./appkit.module.scss";

// Icons
import GridIcon from "../../icons/GridIcon";

export default function AppKit() {
  return (
    <section className={`mb-2 mt-16 flex ${styles.appKit}`}>
      <div
        className={`flex aspect-square rounded-[40px] bg-orange p-10 ${styles.appKit__thumbnail}`}
      >
        <Image
          className="w-full h-full object-contain"
          src={"/product_teaser/AppKit_Preview.png"}
          width={300}
          height={700}
          alt="AppKit Sign In Mobile View"
        />
      </div>

      <Card className={`${styles.appKit__card}`} icon={GridIcon}>
        <CardContent
          mainBtnURL="https://reown.com/appkit"
          tag="Product"
          title="AppKit"
          headline="The toolkit to build onchain app UX"
          description="Build world-class app experiences with multiple, cutting edge features designed to make web3 usabble."
        />
      </Card>
    </section>
  );
}
