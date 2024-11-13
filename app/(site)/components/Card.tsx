// React
import { FC, PropsWithChildren, SVGProps } from "react";

// CLSX
import clsx from "clsx";

interface CardProps extends PropsWithChildren {
  icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
}

export default function Card({ icon: Icon, children, className }: CardProps) {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col justify-between gap-30 bg-white rounded-[40px] p-10"
      )}
    >
      <Icon className="h-32 self-end lg:self-start" />
      {children}
    </div>
  );
}
