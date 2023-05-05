import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { articlesService } from "~/features/articles/articles.service";

export const useArticlePageData = routeLoader$(async () => {
  const [article] = await Promise.all([articlesService.getArticle("1")]);

  return {
    article: article,
  };
});

export default component$(() => {
  const pageData = useArticlePageData();

  return (
    <div class=" max-w-4xl">
      <AppPageTitle text={pageData.value.article?.title ?? ""} />

      <figure class="mt-5">
        <img
          class="w-full max-h-96 object-cover rounded-lg"
          src={pageData.value.article?.cover}
          alt={pageData.value.article?.title}
        />
      </figure>

      <div class="mt-4 max-w-4xl">
        <p>{pageData.value.article?.body}</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Artykuł",
  meta: [
    {
      name: "description",
      content: "Artykuł",
    },
  ],
};
