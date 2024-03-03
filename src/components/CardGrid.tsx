import type { CollectionEntry } from "astro:content";
import Card from "./Card";

export interface Props {
  posts: CollectionEntry<"blog">[];
}

export const CardGrid = ({ posts }: Props) => {
  const handleMouseMove = e => {
    const { currentTarget } = e;

    for (let card of currentTarget.querySelectorAll(".card")) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <ul
      className="cards-grid grid gap-4 sm:grid-cols-2"
      onMouseMove={handleMouseMove}
    >
      {posts.map(({ data, slug }) => (
        <Card
          href={`/posts/${slug}`}
          title={data.title}
          description={data.description}
          pubDatetime={data.pubDatetime}
          modDatetime={data.modDatetime}
          key={slug}
        />
      ))}
    </ul>
  );
};

export default CardGrid;
