import { Api, ApiContext, ApiError } from "@app/core/api/ApiContext";
import ENV from "@config/env.json";
import axios from "axios";
import { ReactNode, useState } from "react";
import { requests } from "./api-requests";
import { apiStatusCodes } from "./api-status-codes";

export function ApiProvider({ children }: { children: ReactNode }) {
  const { BASE_URL } = ENV;
  const [error, setError] = useState<ApiError | null>(null);

  const apiClient: Api = {
    apiRequest: async (configName, args) => {
      if (!requests[configName]) {
        throw new Error("No request name defined");
      }

      //if (requests[configName].method) {
      const client = axios.create({ baseURL: BASE_URL, ...args });

      // return client
      //   .request(requests[configName])
      //   .then((res) => {
      //     if (res.status < 300) {
      //       return { data: res.data };
      //     } else {
      //       const msg = apiStatusCodes[res.status];
      //       if (args.showNotification) {
      //         setError({ message: msg });
      //       }
      //       return {
      //         message: msg,
      //       };
      //     }
      //   })
      //   .catch((err) => {
      //     if (args.showNotification) {
      //       setError({ message: err });
      //     }
      //     return {
      //       message: err,
      //     };
      //   });

      // ---------
      // Handle error status that are not 200
      // Add a response interceptor
      client.interceptors.response.use(
        (response) => {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return {
            data: response.data as unknown,
          };
        },
        (error: { serverCode: number }) => {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Handle the response error
          const msg = apiStatusCodes[error.serverCode];
          if (args.showNotification) {
            setError({ message: msg });
          }
        }
      );

      return client.request(requests[configName]);
    },
    error,
    setError,
  };

  return (
    <ApiContext.Provider value={apiClient}>{children}</ApiContext.Provider>
  );
}
