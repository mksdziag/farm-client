import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { getBreadcrumbs } from "~/constants/breadcrumbs";

export default component$(() => {
  const breadcrumbs = getBreadcrumbs("/account");

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />
      <AppPageTitle text="Moje konto - lista kategorii do edycji" />

      <div class="w-full max-w-xl">
        <ul>
          <li>Tutaj jest kategoria do edycji </li>
          <li>I kolejna </li>
        </ul>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Moje konto",
  meta: [
    {
      name: "description",
      content: "Moje konto - kategorie",
    },
  ],
};
