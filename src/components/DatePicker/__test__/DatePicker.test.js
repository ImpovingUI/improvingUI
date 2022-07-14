//Import the library
//This library already installed in the project with create-react-app
import { screen, render, fireEvent } from '@testing-library/react'

// This library has been installed with: 
import '@testing-library/jest-dom'

//Import component for testing
import { DatePicker } from '../DatePicker'

//Description of the test and tests in the callback
describe('Component DatePicker test', () => {
  it('renders the component', () => {
    const props = {
      color: "primary",
      initialDate: "08/03/2022",
      value: "",
      setValue: (string) => { }
    };

    const { container } = render(<DatePicker {...props} />);
    expect(container).toMatchSnapshot();
  })
})