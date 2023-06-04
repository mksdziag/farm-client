import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppBreadcrumbs } from "~/components/shared/app-breadcrumbs";
import { AppPageTitle } from "~/components/shared/app-page-title";
import { getBreadcrumbs } from "~/constants/breadcrumbs";
import { CreateArticleForm } from "~/components/artiicles/forms/create-article";
import { CreateCategoryForm } from "~/components/categories/forms/create-category";
import { CreateTagForm } from "~/components/tags/forms/create-tag";
import { AppTitle } from "~/components/shared/app-title";

export default component$(() => {
  const breadcrumbs = getBreadcrumbs("/account");

  return (
    <div>
      <AppBreadcrumbs items={breadcrumbs} />
      <AppPageTitle text="Moje konto" />

      <div class="w-full max-w-xl">
        <AppTitle text="Nowy artykuł" classes="mb-2" />
        <CreateArticleForm />
        <AppTitle text="Nowa Kategoria" classes="mb-2 mt-10" />
        <CreateCategoryForm />
        <AppTitle text="Nowy Tag" classes="nb-2 mt-10" />
        <CreateTagForm />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Moje konto",
  meta: [
    {
      name: "description",
      content: "Moje konto",
    },
  ],
};
