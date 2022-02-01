import { SCMTheme } from "@hellofresh/scm-design-system";
import { createTheme, Theme } from "@material-ui/core";
import { render, RenderOptions } from "@testing-library/react";
import { FC, ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const customTheme = createTheme(SCMTheme as Theme);

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
