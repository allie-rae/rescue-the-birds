import { screen, render } from "@testing-library/react";
import { Board, textFields } from "./Board";

textFields.forEach((textField) => {
  it(`${textField.label} input renders`, () => {
    render(<Board />);
    const input = screen.getByLabelText(`${textField.label}`);
    expect(input).toBeInTheDocument();
  });
});
