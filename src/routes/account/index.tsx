import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppPageTitle } from "~/components/shared/app-page-title";

export default component$(() => {
  return (
    <div>
      <AppPageTitle text="Moje konto" />
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
