import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { pagesService } from "~/features/pages/pages.service";

export const usePageData = routeLoader$(async () => {
  const [data] = await Promise.all([pagesService.getPage("1")]);

  return {
    data,
  };
});

export default component$(() => {
  const pageData = usePageData();
  return (
    <div>
      <AppPageTitle text="Regulamin" />

      <div>{pageData.value.data.content.html}</div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Regulamin",
  meta: [
    {
      name: "description",
      content: "Regulamin",
    },
  ],
};
