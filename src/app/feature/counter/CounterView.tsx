import { Button } from "@hellofresh/scm-design-system";
import { useState } from "react";

export const CounterView = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
        {" "}
        Up
      </button>
      <button
        disabled
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        Down
      </button>

      <Button
        fullWidth
        color="primary"
        label="Sign In with Azure"
        variant="primary"
      />
    </>
  );
};
