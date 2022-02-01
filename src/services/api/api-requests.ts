import { AxiosRequestConfig } from "axios";

// type Method = 'GET' | 'POST';

export const requests: { [key: string]: AxiosRequestConfig } = {
  getCardPhotos: {
    url: `/photos`,
    method: "GET",
  },
};
