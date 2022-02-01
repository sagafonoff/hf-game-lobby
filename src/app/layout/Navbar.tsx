import { AppBar } from "@hellofresh/scm-design-system";

export function Navbar() {
  return (
    <AppBar
      location={{
        country: "au",
        dc: "",
        dcs: [],
        parsedDcs: () => {
          return [];
        },
        parsedCountries: () => {
          return [{ value: "au", label: "Australia" }];
        },
      }}
      onChangeLocation={function noRefCheck() {
        console.log("onChangeLocation");
      }}
      onMenuClick={function noRefCheck() {
        console.log("onMenuClick");
      }}
    />
  );
}
