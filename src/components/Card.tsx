import type { BlogFrontmatter } from "@content/_schemas";
import { Option } from "@phosphor-icons/react";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
  shortcut?: string;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  shortcut,
}: Props) {
  const { title, pubDatetime, description } = frontmatter;
  return (
    <li className="my-6">
      <a
        href={href}
        className="flex place-content-between text-base font-bold decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 "
      >
        {secHeading ? (
          <h2 className="inline-block text-base decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="inline-block text-base decoration-dashed hover:underline">
            {title}
          </h3>
        )}
        {shortcut && (
          <span
            className="font-light"
            title={"Press option/alt + " + shortcut + " to jump to this result"}
          >
            <Option /> {shortcut}
          </span>
        )}
      </a>
      <p className="text-base text-skin-muted">{description}</p>
      <Datetime datetime={pubDatetime} />
    </li>
  );
}
