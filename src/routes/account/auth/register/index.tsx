import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppPageTitle } from "~/components/shared/app-page-title";

export default component$(() => {
  return (
    <div>
      <AppPageTitle text="Rejestracja" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Rejestracja",
  meta: [
    {
      name: "description",
      content: "Rejestracja",
    },
  ],
};
