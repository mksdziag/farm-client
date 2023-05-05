import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ArticleList } from "~/components/artiicles/list/article-list";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { articlesService } from "~/features/articles/articles.service";

export const useCategoryPageData = routeLoader$(async () => {
  const [articles] = await Promise.all([
    articlesService.getArticles("cat", 15),
  ]);

  return {
    articles,
  };
});

export default component$(() => {
  const pageData = useCategoryPageData();
  return (
    <div>
      <AppPageTitle text="Wpisy w kategorii" />

      <ArticleList items={pageData.value.articles} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Wpisy w kategorii",
  meta: [
    {
      name: "description",
      content: "Wpisy w kategorii",
    },
  ],
};
