import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { getBreadcrumbs } from "~/constants/breadcrumbs";
import { pagesService } from "~/features/pages/pages.service";

export const usePageData = routeLoader$(async () => {
  const [data] = await Promise.all([pagesService.getPage("1")]);

  return {
    data,
  };
});

export default component$(() => {
  const pageData = usePageData();
  const breadcrumbs = getBreadcrumbs("/pages/polityka-prywatnosci");

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />
      <AppPageTitle text="Polityka prywatności" />

      <div>{pageData.value.data.content.html}</div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Polityka prywatności",
  meta: [
    {
      name: "description",
      content: "Polityka prywatności",
    },
  ],
};
