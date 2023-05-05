import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ArticleList } from "~/components/artiicles/list/article-list";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { articlesService } from "~/features/articles/articles.service";

export const useArticlesPageData = routeLoader$(async () => {
  const [recentArticles] = await Promise.all([
    articlesService.getArticles("all", 15),
  ]);

  return {
    articles: recentArticles,
  };
});

export default component$(() => {
  const pageData = useArticlesPageData();

  return (
    <div>
      <AppPageTitle text="Artykuły" />

      <ArticleList items={pageData.value.articles} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Artykuły",
  meta: [
    {
      name: "description",
      content: "Artykuły",
    },
  ],
};
