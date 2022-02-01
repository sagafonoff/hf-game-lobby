import { createContext, useContext } from "react";

type RequestType = string;
type RequestArgs = {
  showLoader: boolean;
  showNotification: boolean;
  [key: string]: unknown;
};

export type ApiError = { message: string };
export type ApiResponse<R> = { data: R };

export interface Api {
  apiRequest: <T extends RequestArgs, R>(
    name: RequestType,
    args: T
  ) => Promise<ApiResponse<R>>;
  error: ApiError | null;
  setError: (error: ApiError) => void;
}

export const ApiContext = createContext<Api | null>(null);

export function useApiContext() {
  return useContext(ApiContext);
}
