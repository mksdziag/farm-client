import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { getBreadcrumbs } from "~/constants/breadcrumbs";

export default component$(() => {
  const breadcrumbs = getBreadcrumbs("/pages");

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />
      <AppPageTitle text="Strony" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Strony",
  meta: [
    {
      name: "description",
      content: "Strony",
    },
  ],
};
