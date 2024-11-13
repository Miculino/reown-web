// React
import { FC, ReactElement, SVGProps } from "react";

interface CardProps {
  title: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  cardContent: ReactElement;
}

export default function Card({ title, icon: Icon, cardContent }: CardProps) {
  return (
    <div>
      <Icon />
      <div className="flex">
        {title ? <h2>{title}</h2> : null}
        {cardContent}
      </div>
    </div>
  );
}
