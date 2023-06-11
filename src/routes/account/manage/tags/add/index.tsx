import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { getBreadcrumbs } from "~/constants/breadcrumbs";
import { CreateTagEditor } from "~/components/features/tags/editor/create-tag-editor";

export default component$(() => {
  const breadcrumbs = getBreadcrumbs("/account");

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />
      <AppPageTitle text="Dodawanie nowego tagu" />

      <div class="w-full max-w-xl">
        <CreateTagEditor />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Moje konto",
  meta: [
    {
      name: "description",
      content: "Moje konto - dodawanie nowego tagu",
    },
  ],
};
