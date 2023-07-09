import type { BlogFrontmatter } from "@content/_schemas";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, description } = frontmatter;
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-bold text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg decoration-dashed hover:underline">{title}</h2>
        ) : (
          <h3 className="text-lg decoration-dashed hover:underline">{title}</h3>
        )}
      </a>
      <p className="text-skin-muted">{description}</p>
      <Datetime datetime={pubDatetime} />
    </li>
  );
}
