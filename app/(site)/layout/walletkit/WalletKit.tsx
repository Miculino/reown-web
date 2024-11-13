// Next
import Image from "next/image";

// Components
import Card from "../../components/Card";
import CardContent from "../../components/card-content/CardContent";

// Styles
import styles from "./walletkit.module.scss";

// Icons
import FolderIcon from "../../icons/FolderIcon";

export default function WalletKit() {
  return (
    <section className={`mb-2 flex ${styles.walletKit}`}>
      <div
        className={`flex aspect-square rounded-[40px] bg-yellow p-10 ${styles.walletKit__thumbnail}`}
      >
        <Image
          className="w-full h-full object-contain"
          src={"/product_teaser/WalletKit_Preview.png"}
          width={300}
          height={700}
          alt="WalletKit Sign In Mobile View"
        />
      </div>

      <Card className={`${styles.walletKit__card}`} icon={FolderIcon}>
        <CardContent
          mainBtnURL="https://reown.com/walletkit"
          tag="Product"
          title="WalletKit"
          headline="The industry standard for designing innovative wallet UX"
          description="Unlock native UX features within your wallet and enable wallet users to easily connect with thousands of apps."
        />
      </Card>
    </section>
  );
}
