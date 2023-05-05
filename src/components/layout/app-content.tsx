import { Slot, component$ } from "@builder.io/qwik";

export const AppContent = component$(() => {
  return (
    <div class="mb-4 ">
      <Slot />
    </div>
  );
});
