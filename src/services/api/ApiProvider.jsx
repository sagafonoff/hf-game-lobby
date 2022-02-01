import { ApiContext } from "@app/core/api/ApiContext";
import { useState } from "react";
import { requests } from "./api-requests";
import { responses } from "./api-responses";

export function ApiProvider({ children }) {
  const [error, setError] = useState(null);

  const apiClient = {
    apiRequest: async (configName, args) => {
      if (!requests[configName]) {
        throw new Error("No request name defined");
      }

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
