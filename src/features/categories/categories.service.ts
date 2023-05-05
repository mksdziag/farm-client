import type { Category } from "~/features/categories/types";
import { sleep } from "~/utils/sleep";

export async function getCategory(id: string) {
  await sleep(250);

  const details: Category = {
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
  };

  return details;
}

export const categoriesService = {
  getCategory,
};
