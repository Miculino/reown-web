// Layout
import Hero from "./layout/hero/Hero";
import ProductOverview from "./layout/product-overview/ProductOverview";
import Rsvp from "./layout/rsvp/Rsvp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rsvp />
      <ProductOverview />
    </main>
  );
}
