import type { Article } from "~/features/articles/types";
import { httpClient } from "~/http/client";
import { mapToApiError } from "~/http/helpers";
import type { ApiError, ApiResponse } from "~/http/types";

async function getArticles(
  categoryId: string | undefined = "all",
  _limit = 20,
): Promise<ApiResponse<Article[]>> {
  let data: Article[] = [];
  let error: ApiError | null = null;

  try {
    const url = categoryId === "all" ? `articles` : `articles/category/${categoryId}`;
    data = await httpClient.get(url).json<Article[]>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}

async function getArticlesByTag(_tag: string, _limit = 20) {
  return [];
}

async function getArticle(id: string): Promise<ApiResponse<Article | null>> {
  let data: Article | null = null;
  let error: ApiError | null = null;

  try {
    data = await httpClient.get(`articles/${id}`).json<Article>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}

export const articlesService = {
  getArticles,
  getArticlesByTag,
  getArticle,
};
