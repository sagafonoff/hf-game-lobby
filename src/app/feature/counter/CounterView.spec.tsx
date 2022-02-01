import { cleanup } from "@testing-library/react";
import { render } from "../../test/test-utils";
import { CounterView } from "./CounterView";

afterEach(cleanup);

it("should equal to 0", () => {
  const { getByTestId } = render(<CounterView />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});

it("should be enabled", () => {
  const { getByTestId } = render(<CounterView />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});

it("should be disabled", () => {
  const { getByTestId } = render(<CounterView />);
  expect(getByTestId("button-down")).toBeDisabled();
});
