import { screen, render } from "@testing-library/react";
import { Board, textFields } from "./Board";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

textFields.forEach((textField) => {
  describe(`${textField.label} input`, () => {
    it(`${textField.label} input renders`, () => {
      render(<Board />);
      const input = screen.getByLabelText(`${textField.label}`);
      expect(input).toBeInTheDocument();
    });

    it(`${textField.label} input is required`, async () => {
      render(<Board />);
      const input = screen.getByLabelText(`${textField.label}`);

      await act(async () => {
        userEvent.click(input);
      });

      await act(async () => {
        userEvent.type(input, "Allie");
      });

      expect(input).toHaveValue("Allie");

      await act(async () => {
        userEvent.clear(input);
      });

      expect(input).toHaveValue("");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it(`${textField.label} input displays error message on invalid form submission`, async () => {
      render(<Board />);
      const submitButton = screen.getByRole("button", { name: "Submit" });

      await act(async () => {
        userEvent.click(submitButton);
      });

      expect(screen.getByText(textField.rules.required)).toBeInTheDocument();
    });

    it(`${textField.label} input does not display error message when user input is valid`, async () => {
      render(<Board />);
      const input = screen.getByLabelText(`${textField.label}`);

      await act(async () => {
        userEvent.click(input);
      });

      await act(async () => {
        userEvent.type(input, "Allie");
      });

      expect(input).toHaveAttribute("aria-invalid", "false");
      expect(screen.queryByText(textField.rules.required)).not.toBeInTheDocument();
    });
  });
});
