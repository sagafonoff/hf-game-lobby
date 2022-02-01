import { AxiosRequestConfig } from "axios";

export const requests: { [key: string]: AxiosRequestConfig } = {
  getDailyGameName: {
    url: `/dailyGameName`,
    method: "GET",
  },
};
