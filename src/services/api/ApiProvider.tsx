import { Api, ApiContext, ApiError } from "@app/core/api/ApiContext";
import { ReactNode, useState } from "react";
import { requests } from "./api-requests";

export function ApiProvider({ children }: { children: ReactNode }) {
  const [error, setError] = useState<ApiError | null>(null);

  const apiClient: Api = {
    apiRequest: async (configName, args) => {
      if (!requests[configName]) {
        throw new Error("No request name defined");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const responses: { [url: string]: any } = {
        "/dailyGameName": {
          data: {
            gameName: "Space Invaders",
          },
        },
      };

      const { url } = requests[configName];
      if (url) {
        return responses[url];
      } else {
        const err = { message: "no url path configured" };
        setError(err);
        return err;
      }
    },
    error,
  };

  return (
    <ApiContext.Provider value={apiClient}>{children}</ApiContext.Provider>
  );
}
