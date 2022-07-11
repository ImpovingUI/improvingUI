//Import the library
//This library already installed in the project with create-react-app
import { screen, render, fireEvent } from '@testing-library/react'

// This library has been installed with: 
import '@testing-library/jest-dom'


//Import component for testing
import { Button } from './Button';

//Description of the test and tests in the callback
describe('Component Button test', () => {

     /* Testing the component must be indicated item in the section "it"  */
     it('must be a button', () => {
          render(<Button label="Hola" />)
          expect(screen.getByRole('button')).toBeInTheDocument();
     });

     /* Testing that the text content of the button is not empty */
     it('must have a value', () => {
          render(<Button label="Hola" />)
          expect(screen.getByRole('button').textContent).not.toBe('');
     })

     // Simulate a event
     it('Test click event', () => {
          // render(<Button label="Hola" />)

          const mockCallBack = jest.fn();
          // const mockCallBack = () => done();

          // const button = shallow((<Button label="Hola" onClick={mockCallBack}>Ok!</Button>)); 
          render(<Button label="Hola" onClick={mockCallBack}>Ok!</Button>)

          // button.find('button').simulate('click'); 
          fireEvent.click(screen.getByRole('button'))
          fireEvent.click(screen.getByRole('button'))
          // fireEvent.click(screen.getByRole('button'))

          expect(mockCallBack).toHaveBeenCalledTimes(2); // jest -> testing library
     });
});