import { FC, SVGProps } from "react";

interface ProductOverviewCardProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  index: number;
  title: string;
  description: string;
}

export default function ProductOverviewCard({
  icon: Icon,
  index,
  title,
  description,
}: ProductOverviewCardProps) {
  return (
    <div className="bg-gray-100/80 px-7 py-10 rounded-[64px] flex flex-col gap-4">
      <Icon width={85} height={85} />
      <div className="flex flex-col gap-4">
        <span className="text-background text-xs">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <h2>{title}</h2>
        <p className="ml-4 text-sm text-background">{description}</p>
      </div>
    </div>
  );
}
