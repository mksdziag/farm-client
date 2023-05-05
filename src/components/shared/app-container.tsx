import { Slot, component$ } from "@builder.io/qwik";

export const AppContainer = component$(() => {
  return (
    <div class="container mx-auto px-4">
      <Slot />
    </div>
  );
});
