import { httpClient } from "~/http/client";
import { mapToApiError } from "~/http/helpers";
import type { ApiError, ApiResponse } from "~/http/types";
import type { Tag } from "./types";

async function createTag(payload: Omit<Tag, "id">): Promise<ApiResponse<Tag>> {
  let data: Tag | null = null;
  let error: ApiError | null = null;

  try {
    data = await httpClient.post(`tags`, { json: payload }).json<Tag>();
  } catch (err: any) {
    error = mapToApiError(err);
  }

  return {
    data,
    error,
  };
}

export const tagsService = {
  createTag,
};
