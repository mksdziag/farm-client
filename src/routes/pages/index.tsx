import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Regulamin</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Regulamin",
  meta: [
    {
      name: "description",
      content: "Regulamin serwisu",
    },
  ],
};
