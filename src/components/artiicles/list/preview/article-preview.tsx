import { Link } from "@builder.io/qwik-city";
import { AppTitle } from "~/components/shared/app-title";
import type { Article } from "~/features/articles/types";
import { trimTextByWords } from "~/utils/trim-text-by-words";

interface ArticlePreviewProps {
  item: Article;
}

export function ArticlePreview(props: ArticlePreviewProps) {
  return (
    <div class="flex flex-col  border shadow-sm mb-4 rounded-md md:flex-row">
      <figure class="h-full w-96 max-w-full p-0">
        <Link class="block h-full w-full" href={`/artykuly/${props.item.id}`}>
          <img
            loading="lazy"
            class="block h-full w-full"
            src={props.item.cover}
            alt="Album"
          />
        </Link>
      </figure>
      <div class="p-4 flex flex-col w-full">
        <Link href={`/artykuly/${props.item.id}`}>
          <AppTitle text={props.item.title} />
        </Link>
        <p>{trimTextByWords(props.item.content, 20)}</p>

        <ul class="mb-5">
          {props.item.tags.map((tag) => (
            <li key={tag} class="inline">
              <Link class="inline" href={`/tagi/${tag}`}>
                <span class="badge badge-ghost mr-1">{tag}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div class="flex justify-end mt-auto w-full">
          <button class="btn btn-success btn-sm mr-1">+1</button>
          <button class="btn btn-error btn-sm mr-1">-1</button>
          <button class="btn btn-primary btn-sm mr-1">Share</button>
          <button class="btn btn-primary btn-sm">Save for later</button>
        </div>
      </div>
    </div>
  );
}
