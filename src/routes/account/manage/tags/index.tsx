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
      <AppPageTitle text="Moje konto - lista tagów do edycji" />

      <div class="w-full max-w-xl">
        <ul>
          <li>Tutaj jest tag do edycji</li>
          <li>I kolejny byq</li>
        </ul>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Moje konto - Tagi do edycji",
  meta: [
    {
      name: "description",
      content: "Moje konto - tagi",
    },
  ],
};
