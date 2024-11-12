// Constants
import { PRODUCT_OVERVIEW_LIST } from "@/app/constants/productOverviewList";
import ProductOverviewCard from "../../components/ProductOverviewCard";
import SwiperCarousel from "../../components/SwiperCarousel";
import { ReactElement } from "react";

export default function ProductOverview() {
  const mappedProductOverviewCards: ReactElement[] = PRODUCT_OVERVIEW_LIST.map(
    ({ title, description, icon }, index) => (
      <ProductOverviewCard
        key={index}
        index={index}
        title={title}
        description={description}
        icon={icon}
      />
    )
  );

  return (
    <section className="mt-16">
      <div className="flex gap-2">
        <SwiperCarousel data={mappedProductOverviewCards} />
      </div>
    </section>
  );
}
