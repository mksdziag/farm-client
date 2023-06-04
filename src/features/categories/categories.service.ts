import type { Category } from "~/features/categories/types";
import { httpClient } from "~/http/client";
import { mapToApiError } from "~/http/helpers";
import type { ApiError, ApiResponse } from "~/http/types";

async function getCategoryById(id: string): Promise<ApiResponse<Category | null>> {
  let data: Category | null = null;
  let error: ApiError | null = null;

  try {
    data = await httpClient.get(`categories/${id}`).json<Category | null>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}
async function getCategoryByKey(key: string): Promise<ApiResponse<Category | null>> {
  let data: Category | null = null;
  let error: ApiError | null = null;

  try {
    data = await httpClient.get(`categories/key/${key}`).json<Category | null>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}

async function getCategories(): Promise<ApiResponse<Category[]>> {
  let data: Category[] = [];
  let error: ApiError | null = null;

  try {
    data = await httpClient.get(`categories`).json<Category[]>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}

async function createCategory(payload: Omit<Category, "id">): Promise<ApiResponse<Category>> {
  let data: Category | null = null;
  let error: ApiError | null = null;

  try {
    data = await httpClient.post(`categories`, { json: payload }).json<Category>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}

export const categoriesService = {
  getCategories,
  getCategoryById,
  getCategoryByKey,
  createCategory,
};
