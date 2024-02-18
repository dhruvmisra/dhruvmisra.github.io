import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <a
      href={href}
      className="group flex cursor-pointer flex-col gap-2 rounded-md border border-neutral-700 p-4 h-full
        transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400"
    >
      <div
        className="flex justify-between text-lg font-medium text-skin-accent 
          decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
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
      <p className="text-neutral-500 text-sm">{description}</p>
    </a>
  );
}
