// import { Config } from "@app/core/config/config";
import AppConfiguation from "./env.json";

export interface Config {
  TARGET: string;
  BASE_URL: string;
  MOCK_URL: string;
}

class ConfigProvider {
  constructor(appConfig: Config) {
    Object.keys(appConfig).forEach((k) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: element explicit has any
      this[k] = appConfig[k];
    });
  }
}

export const AppConfigProvider = new ConfigProvider(AppConfiguation) as Config;
