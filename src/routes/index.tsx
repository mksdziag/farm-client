import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ArticleList } from "~/components/artiicles/list/article-list";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { AppSection } from "~/components/shared/app-section";
import { articlesService } from "~/features/articles/articles.service";

export const useHomePageData = routeLoader$(async () => {
  const [articlesResponse] = await Promise.all([articlesService.getArticles("all", 6)]);

  return {
    articles: articlesResponse.data,
  };
});

export default component$(() => {
  const pageData = useHomePageData();
  return (
    <>
      <AppSection>
        <AppPageTitle text="Najnowsze wpisy" classes="mb-5" />
        <ArticleList items={pageData.value.articles} />
      </AppSection>
    </>
  );
});

export const head: DocumentHead = {
  title: "Farmero",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
