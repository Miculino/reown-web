// Constants
import { PRODUCT_OVERVIEW_LIST } from "@/app/constants/productOverviewList";
import ProductOverviewCard from "../../components/ProductOverviewCard";

export default function ProductOverview() {
  return (
    <section className="mt-16">
      <div className="flex gap-2">
        {PRODUCT_OVERVIEW_LIST.slice(0, 1).map(
          ({ title, description, icon }, index) => (
            <ProductOverviewCard
              key={index}
              index={index}
              title={title}
              description={description}
              icon={icon}
            />
          )
        )}
      </div>
    </section>
  );
}
