import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ArticleList } from "~/components/features/articles/list/article-list";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { getBreadcrumbs } from "~/constants/breadcrumbs";
import { articlesService } from "~/features/articles/articles.service";

export const useCategoriesPageData = routeLoader$(async (e) => {
  const [articlesResponse] = await Promise.all([articlesService.getArticles({ _limit: 12 })]);

  if (!articlesResponse || articlesResponse.error) {
    throw e.redirect(302, "/");
  }

  return {
    articles: articlesResponse.data,
  };
});

export default component$(() => {
  const pageData = useCategoriesPageData();
  const breadcrumbs = getBreadcrumbs("/kategorie");

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />
      <AppPageTitle text="Wszystkie kategorie" />

      <ArticleList items={pageData.value.articles ?? []} />
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
