import type { Category } from "../categories/types";
import type { Tag } from "../tags/types";

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  cover: string;
  tags: Tag[];
  categories: Category[];
}
