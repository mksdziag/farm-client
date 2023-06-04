import type { Article } from "~/features/articles/types";
import { httpClient } from "~/http/client";
import { mapToApiError } from "~/http/helpers";
import type { ApiError, ApiResponse } from "~/http/types";

async function getArticles({ _limit = 20 }: { _limit?: number }): Promise<ApiResponse<Article[]>> {
  let data: Article[] = [];
  let error: ApiError | null = null;

  try {
    data = await httpClient.get("articles").json<Article[]>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}
async function getArticlesByCategoryKey({
  categoryKey = "",
  _limit = 20,
}: {
  categoryKey?: string;
  _limit?: number;
}): Promise<ApiResponse<Article[]>> {
  let data: Article[] = [];
  let error: ApiError | null = null;

  try {
    data = await httpClient.get(`articles/category/key/${categoryKey}`).json<Article[]>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}
async function getArticlesByCategoryId({
  categoryId = "",
  _limit = 20,
}: {
  categoryId?: string;
  _limit?: number;
}): Promise<ApiResponse<Article[]>> {
  let data: Article[] = [];
  let error: ApiError | null = null;

  try {
    data = await httpClient.get(`articles/category/${categoryId}`).json<Article[]>();
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

async function createArticle(
  payload: Omit<Article, "id" | "tags" | "categories">,
): Promise<ApiResponse<Article | null>> {
  let data: Article | null = null;
  let error: ApiError | null = null;

  try {
    data = await httpClient.post("articles", { json: payload }).json<Article>();
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
  getArticlesByCategoryKey,
  getArticlesByCategoryId,
  getArticlesByTag,
  getArticle,
  createArticle,
};
