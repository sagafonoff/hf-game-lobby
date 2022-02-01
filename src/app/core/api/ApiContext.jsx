import { createContext, useContext } from "react";

export const ApiContext = createContext(null);

export function useApiContext() {
  return useContext(ApiContext);
}
