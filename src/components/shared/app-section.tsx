import { Slot } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

export const AppSection = component$(({ slim }: { slim?: boolean }) => {
  return (
    <section class={slim ? "py-2" : "py-6"}>
      <Slot />
    </section>
  );
});
