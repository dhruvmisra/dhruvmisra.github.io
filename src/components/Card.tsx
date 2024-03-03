import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";

export interface Props {
  href: string;
  title: string;
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined | null;
  description?: string;
}

export default function Card({
  href,
  title,
  pubDatetime,
  modDatetime,
  description,
}: Props) {
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <a
      href={href}
      className="card group rounded-md transition-all duration-300 hover:-translate-y-2"
    >
      <div className="card-border"></div>
      <div className="card-content flex cursor-pointer flex-col gap-2 p-4">
        <div
          className="flex justify-between text-lg font-medium text-skin-accent 
          decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          <h2 {...headerProps}>{title}</h2>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="transition-all duration-300 group-hover:translate-x-1"
          >
            <path
              d="M5.25 12.75L12.75 5.25"
              stroke="#999999"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5.25 5.25H12.75V12.75"
              stroke="#999999"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </a>
  );
}
