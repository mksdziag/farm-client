import { Link } from "@builder.io/qwik-city";
import { AppTitle } from "~/components/shared/app-title";
import type { Article } from "~/features/articles/types";
import { trimTextByWords } from "~/utils/trim-text-by-words";

interface ArticlePreviewProps {
  item: Article;
}

export function ArticlePreview(props: ArticlePreviewProps) {
  return (
    <div class="flex flex-col border shadow-sm mb-4 rounded-md w-full md:flex-row">
      <figure class="flex h-60 md:h-48 w-full md:w-4/12 p-0">
        <Link class="block h-full w-full" href={`/artykuly/${props.item.id}`}>
          <img
            loading="lazy"
            class="w-full h-full object-cover"
            src={props.item.cover}
            alt="Album"
          />
        </Link>
      </figure>
      <div class="p-4 flex flex-col w-full md:w-8/12">
        <Link href={`/artykuly/${props.item.id}`}>
          <AppTitle text={props.item.title} />
        </Link>
        <p>{trimTextByWords(props.item.content, 20)}</p>

        <ul class="mb-5">
          {(props.item.tags ?? []).map((tag) => (
            <li key={tag.id} class="inline">
              <Link class="inline" href={`/tagi/${tag.key}`}>
                <span class="badge badge-ghost mr-1">{tag.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div class="mt-auto">
          <div class="flex flex-wrap justify-end w-full -mt-2">
            <button class="btn btn-success btn-sm mt-2 mr-1">+1</button>
            <button class="btn btn-error btn-sm mt-2 mr-1">-1</button>
            <button class="btn btn-primary btn-sm mt-2 mr-1">Share</button>
            <button class="btn btn-primary mt-2 btn-sm">Save for later</button>
          </div>
        </div>
      </div>
    </div>
  );
}
