import { component$ } from "@builder.io/qwik";

export const AppHeaderSimple = component$(() => {
  return (
    <div class="navbar bg-base-300 flex justify-center">
      <a class="btn btn-ghost normal-case text-xl">Farmero</a>
    </div>
  );
});
