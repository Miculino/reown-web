// Layout
import AppKit from "./layout/appkit/AppKit";
import Articles from "./layout/articles/Articles";
import Hero from "./layout/hero/Hero";
import ProductOverview from "./layout/product-overview/ProductOverview";
import Rsvp from "./layout/rsvp/Rsvp";
import SocialProof from "./layout/social-proof/SocialProof";
import WalletKit from "./layout/walletkit/WalletKit";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rsvp />
      <ProductOverview />
      <SocialProof />
      <AppKit />
      <WalletKit />
      <Articles />
    </main>
  );
}
