import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestEventLoader } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { getBreadcrumbs } from "~/constants/breadcrumbs";
import { articlesService } from "~/features/articles/articles.service";

export const useArticlePageData = routeLoader$(
  async (e: RequestEventLoader) => {
    const [article] = await Promise.all([
      articlesService.getArticle(e.params.id),
    ]);

    if (!article) {
      throw e.redirect(302, "/404");
    }

    return {
      article: article,
    };
  }
);

export default component$(() => {
  console.log();
  const pageData = useArticlePageData();
  const breadcrumbs = getBreadcrumbs("/artykuly/:id", false, {
    path: "/artykuly/" + pageData.value.article?.id,
    text: pageData.value.article?.title ?? "",
  });

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />

      <AppPageTitle text={pageData.value.article?.title ?? ""} />

      <div class="max-w-4xl">
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
