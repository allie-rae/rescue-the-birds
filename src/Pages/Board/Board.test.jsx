import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Board, requiredInputErrors } from "./Board";

describe("Board component", () => {
  test("TextFields are required", () => {
    const { getByRole, getByText } = render(<Board />);

    // Trigger form submission without filling in the required fields
    userEvent.click(getByRole("button", { name: "Submit" }));

    // Expect error messages to be displayed for the required fields
    expect(getByText(requiredInputErrors.name)).toBeInTheDocument();
  });
});
