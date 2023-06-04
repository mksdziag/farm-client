import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ArticleList } from "~/components/artiicles/list/article-list";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { getBreadcrumbs } from "~/constants/breadcrumbs";
import { articlesService } from "~/features/articles/articles.service";
import { categoriesService } from "~/features/categories/categories.service";

export const useCategoryPageData = routeLoader$(async (e) => {
  const key = e.params.key;

  const [categoryResponse, articlesResponse] = await Promise.all([
    categoriesService.getCategoryByKey(key),
    articlesService.getArticlesByCategoryKey({ categoryKey: key }),
  ]);

  if (!categoryResponse || categoryResponse.error) {
    throw e.redirect(302, "/kategorie");
  }

  return {
    category: categoryResponse.data,
    articles: articlesResponse.data,
  };
});

export default component$(() => {
  const pageData = useCategoryPageData();
  const breadcrumbs = getBreadcrumbs("/kategorie");

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />
      <AppPageTitle text={`Wpisy w kategorii: ${pageData.value.category?.name ?? "---"}`} />

      {pageData.value.articles.length ? (
        <ArticleList items={pageData.value.articles} />
      ) : (
        <div class="alert shadow-sm">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-info flex-shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Brak wpisów w tej kategorii</span>
          </div>
        </div>
      )}
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
