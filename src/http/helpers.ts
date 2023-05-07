import type { ApiError } from "./types";

export const mapToApiError = (error: any): ApiError => {
  return {
    message: error.message ?? "Something went wrong",
    status: error.status ?? 500,
  };
};
