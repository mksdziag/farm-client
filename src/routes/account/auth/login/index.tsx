import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AppPageTitle } from "~/components/shared/app-page-title";

export default component$(() => {
  return (
    <div>
      <AppPageTitle text="Logowanie" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Logowanie",
  meta: [
    {
      name: "description",
      content: "Logowanie",
    },
  ],
};
