// import { Config } from "@app/core/config/config";
import AppConfiguation from "./env.json";

export interface Config {
  TARGET: string;
  BASE_URL: string;
  MOCK_URL: string;
}

// type ConfigProvider = () => Config;

class ConfigProvider {
  constructor(appConfig: Config) {
    Object.keys(appConfig).forEach((k) => {
      // @ts-ignore: element explicit has any
      this[k] = appConfig[k];
    });
  }
}

// export const AppVersionInfo = () => {
//   return AppConfigProvider.ENV === "production"
//     ? `v${AppConfigProvider.VERSION}`
//     : `${capitalize(AppConfigProvider.ENV)}\u00A0-\u00A0v${
//         AppConfigProvider.VERSION
//       }`;
// };

export const AppConfigProvider = new ConfigProvider(AppConfiguation) as Config;
