import type { Article } from "~/features/articles/types";
import { ArticlePreview } from "./preview/article-preview";
import { component$ } from "@builder.io/qwik";

interface ArticleListProps {
  items: Article[];
  class?: string;
}
export const ArticleList = component$((props: ArticleListProps) => {
  return (
    <div class={props.class ?? ""}>
      {props.items.map((item) => {
        return <ArticlePreview key={item.id} item={item} />;
      })}
    </div>
  );
});
