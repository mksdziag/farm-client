import type { Category } from "~/features/categories/types";
import { sleep } from "~/utils/sleep";

const categories: Category[] = [
  {
    id: "rozrywka",
    name: "Rozrywka",
  },
  {
    id: "polityka",
    name: "Polityka",
  },
  {
    id: "ciekawostki",
    name: "Ciekawostki",
  },
  {
    id: "sport",
    name: "Sport",
  },
  {
    id: "geopolityka",
    name: "Geopolityka",
  },
  {
    id: "kultura",
    name: "Kultura",
  },
  {
    id: "news",
    name: "Newsy",
  },
];

export async function getCategory(id: string) {
  await sleep(85);

  const details = categories.find((category) => category.id === id) ?? null;

  return details;
}

export const categoriesService = {
  getCategory,
};
