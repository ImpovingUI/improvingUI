//Import the library
//This library already installed in the project with create-react-app
import { screen, render, fireEvent } from "@testing-library/react";

// This library has been installed with:
// import "@testing-library/jest-dom";

//Import component for testing
import { DatePicker } from "../DatePicker";

//Description of the test and tests in the callback
describe("Component DatePicker test", () => {
  beforeEach(() => {
    const props = {
      color: "primary",
      initialDate: "",
      value: "",
      setValue: (string) => {},
    };
    render(<DatePicker {...props} />);
  });

  it("renders the component", () => {
    // const props = {
    //   color: "primary",
    //   initialDate: "",
    //   value: "",
    //   setValue: (string) => {},
    // };

    // const { container } = render(<DatePicker {...props} />);
    // expect(container).toMatchSnapshot();
    screen.debug();
  });

  test("onClick in input to show date-picker", () => {
    const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
    fireEvent.focus(inputDate);
    // screen.debug();
  });

  test.only("it should change value for a select", () => {
    const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
    fireEvent.focus(inputDate);

    fireEvent.change(inputDate, { target: { value: "05/02/2022" } });
    expect(inputDate.value).toBe("05/02/2022");

    // screen.debug();
  });
});
