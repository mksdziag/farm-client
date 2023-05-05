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
          <img class="block h-full w-full" src={props.item.cover} alt="Album" />
        </Link>
      </figure>
      <div class="p-4">
        <Link href={`/artykuly/${props.item.id}`}>
          <AppTitle text={props.item.title} />
        </Link>
        <p>{trimTextByWords(props.item.body, 20)}</p>

        <ul>
          {props.item.tagList.map((tag) => (
            <li key={tag} class="inline">
              <Link class="inline" href={`/tagi/${tag}`}>
                <span class="badge badge-ghost mr-1">{tag}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div class="card-actions justify-end mt-5">
          <button class="btn btn-success btn-sm">+1</button>
          <button class="btn btn-error btn-sm">-1</button>
          <button class="btn btn-primary btn-sm">Share</button>
          <button class="btn btn-primary btn-sm">Save for later</button>
        </div>
      </div>
    </div>
  );
}
