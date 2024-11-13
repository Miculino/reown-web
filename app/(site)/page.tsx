// Layout
import Hero from "./layout/hero/Hero";
import ProductOverview from "./layout/product-overview/ProductOverview";
import Rsvp from "./layout/rsvp/Rsvp";
import SocialProof from "./layout/social-proof/SocialProof";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rsvp />
      <ProductOverview />
      <SocialProof />
    </main>
  );
}
