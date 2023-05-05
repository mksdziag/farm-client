import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import type { BreadcrumbItem } from "~/constants/breadcrumbs";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const AppBreadcrumbs = component$((props: BreadcrumbsProps) => {
  function isLast(index: number) {
    return index === props.items.length - 1;
  }

  return (
    <div class="text-sm breadcrumbs py-0 mb-2">
      <ul>
        {props.items.map((item, index) => (
          <li key={item.text} class={`${isLast(index) ? "text-gray-400" : ""}`}>
            <Link href={item.path}>
              {item.icon && item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
