import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ArticleList } from "~/components/artiicles/list/article-list";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { articlesService } from "~/features/articles/articles.service";

export const useCategoriesPageData = routeLoader$(async () => {
  const [articles] = await Promise.all([
    articlesService.getArticles("all", 15),
  ]);

  return {
    articles,
  };
});

export default component$(() => {
  const pageData = useCategoriesPageData();
  return (
    <div>
      <AppPageTitle text="Kategorie" />

      <ArticleList items={pageData.value.articles} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Kategorie",
  meta: [
    {
      name: "description",
      content: "Kategorie",
    },
  ],
};
