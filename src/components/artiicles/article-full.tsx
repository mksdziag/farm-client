import type { Article } from "~/features/articles/types";

import { AppTitle } from "../shared/app-title";
import { component$ } from "@builder.io/qwik";

export const ArticleFull = component$(({ item }: { item: Article }) => {
  return (
    <div>
      <div class=" max-w-4xl">
        <AppTitle size="large" text={item.title} />

        <figure class="mt-5">
          <img
            class="w-full max-h-96 object-cover rounded-lg"
            src={item.cover}
            alt={item.title}
          />
        </figure>

        <div class="mt-4 max-w-4xl">
          <p>{item.body}</p>
        </div>
      </div>
    </div>
  );
});
