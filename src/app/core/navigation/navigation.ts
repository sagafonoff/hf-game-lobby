import React from "react";

export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  items?: MenuItem[];
}

type Menu = MenuItem[];

type Route = {
  route: string;
  path: string;
  title: string;
  country?: string[];
  component?: React.FC;
};

type RoutePartition = {
  public: Route[];
  protected: Route[];
};

export const AppMenu: Menu = [
  { id: "home", label: "Home", path: "/" },
  {
    id: "processing",
    label: "Order Processing & Generation",
    items: [
      { id: "odl-pdl", label: "ODL/PDL Generation" },
      { id: "adl", label: "ADL Generation" },
    ],
  },
  { id: "settings", label: "Settings", path: "/settings" },
];

export const routes: RoutePartition = {
  public: [
    {
      route: "home",
      path: "/",
      title: "Home",
    },
  ],
  protected: [
    {
      route: "dashboard",
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      route: "pipelinelist",
      path: "/pipeline/list",
      title: "Pipeline list",
    },
  ],
};

export type Routes = typeof routes;
